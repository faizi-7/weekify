import { NextFunction, Response } from "express";
import prisma from "../utils/prisma";
import { getCurrentWeek } from "../utils/utilMethod";
import { todoSchema } from "../validator/validators";
import { AppError } from "../utils/AppError";
import { ZodError } from "zod";

export async function addTodo(req: any, res: Response, next: NextFunction) {
  try {
    const parsedData = todoSchema.parse(req.body)
    const weekId = req.params.weekId
    const userId = req.user.id
    const dob = req.user.dob
    const currentWeek = getCurrentWeek(dob)
    const week = await prisma.week.findUnique({
      where: {
        id: weekId
      }
    })
    if (!week) {
      return next(new AppError("Week not found!", 404))
    }
    if (currentWeek > week.week) {
      return next(new AppError("Cannot add todo to pass weeks!", 401))
    }
    const todo = await prisma.todo.create({
      data: {
        title: parsedData.title,
        isCompleted: false,
        weekId,
        userId
      }
    })
    res.status(201).json({
      message: "Todo Added",
      data: todo
    })
  } catch (err: any) {
    if (err instanceof ZodError) {
      next(new AppError("Validation Error : " + err.issues.map(e => e.message).join(", "), 400))
    } else {
      next(new AppError(err.message || "Unexpected Error Occured!", 500))
    }
  }
}

export async function deleteTodo(req: any, res: Response, next: NextFunction) {
  try {
    const userId = req.user.id
    const todoId = req.params.todoId
    const deletedTodo = await prisma.todo.delete({
      where: {
        id: todoId,
        userId
      }
    })
    if (!deletedTodo) {
      return next(new AppError("Either todoId is not matching or you are trying to delete another persons todo", 401));
    }
    res.status(200).json({
      message: `Todo with id ${deletedTodo.id} deleted successfully!`
    })
  } catch (err: any) {
    if (err instanceof ZodError) {
      next(new AppError("Validation Error : " + err.issues.map(e => e.message).join(", "), 400))
    } else {
      next(new AppError(err.message || "Unexpected Error Occured!", 500))
    }
  }
}

export async function markCompleted(req: any, res: Response, next: NextFunction) {
  try {
    const userId = req.user.id
    const todoId = req.params.todoId
    const completedTodo = await prisma.todo.update({
      where: {
        id: todoId,
        userId
      },
      data: {
        isCompleted: true
      }
    })
    res.status(201).json({
      message: `Todo with id : ${completedTodo.id} completed successfully!`
    })
  } catch (err: any) {
    if (err instanceof ZodError) {
      next(new AppError("Validation Error : " + err.issues.map(e => e.message).join(", "), 400))
    } else {
      next(new AppError(err.message || "Unexpected Error Occured!", 500))
    }
  }
}