import { NextFunction, Response } from "express";
import { eventSchema, eventUpdateSchema, weekAddSchema } from "../validator/validators";
import prisma from "../utils/prisma";
import { ZodError } from "zod";
import { AppError } from "../utils/AppError";
import { getCurrentWeek } from "../utils/utilMethod";

// Get all the weeks :
export async function getAllWeeks(req: any, res: Response, next: NextFunction) {
  try {
    const userId = req.user.id
    const weeks = await prisma.week.findMany({
      where: {
        userId
      },
      select: {
        id: true,
        reaction: true,
        week: true,
        event: {
          select: {
            title: true
          }
        }
      }
    })
    res.status(201).json({
      data: weeks,
      message: "Weeks fetched Successful!"
    })
  } catch (err: any) {
    next(new AppError(err.message || "Unable to fetch weeks", 500));
  }
}

export async function getSingleWeek(req: any, res: Response, next: NextFunction) {
  try {
    const weekNum = parseInt(req.params.weekNum)
    const userId = req.user.id
    const week = await prisma.week.findUnique({
      where: {
        weekUserId: {
          userId,
          week: weekNum
        }
      },
      include: {
        event: true,
        todos: true
      }
    })
    res.status(200).json({
      data: week,
      message: 'Single week fetched!'
    })
  } catch (err: any) {
    next(new AppError(err.message || "Unexpected Error occured!", 500))
  }
}

export async function getPresentWeek(req : any, res : Response, next : NextFunction) {
  const currentWeek= getCurrentWeek(req.user.dob);
  res.status(200).json({data : currentWeek, message : "Current Week fetched!"})
}

export async function addWeekContent(req: any, res: Response, next: NextFunction) {
  try {
    const data = weekAddSchema.parse(req.body);
    const week = parseInt(req.params.weekNum)
    const currentWeek = getCurrentWeek(req.user.dob)
    if (!(currentWeek - week <= 1 && currentWeek - week >= 0)) {
      throw new Error("You can't update future of past weeks!")
    }
    const updatedWeek = await prisma.week.update({
      where: {
        weekUserId: {
          userId: req.user.id,
          week
        }
      },
      data: data
    });

    res.status(200).json({
      message: "Week Update Successful!",
      data: updatedWeek
    });
  } catch (err: any) {
    if (err instanceof ZodError) {
      next(new AppError("Validation Error : " + err.issues.map(e => e.message).join(", "), 400))
    } else {
      next(new AppError(err.message || "Unexpected Error Occured!", 500))
    }
  }
}

export async function createEvent(req: any, res: Response, next: NextFunction) {
  try {
    const bodyData = eventSchema.parse(req.body)
    const userId = req.user.id;
    const weekNum = parseInt(req.params.weekNum)
    if(weekNum < getCurrentWeek(req.user.dob)) {
      return next(new AppError("Cannot add event to past weeks!", 404));
    }
    let eventData = {
      title: bodyData.title,
      description: bodyData.description,
      date: new Date(bodyData.date),
      week: weekNum,
      userId: userId
    }
    if(bodyData.description) {
      eventData.description= bodyData.description
    }
    const event = await prisma.event.create({
      data: eventData
    })
    res.status(201).json({
      message: "Event Created Successful!",
      data: event
    })
  } catch (err: any) {
    if (err instanceof ZodError) {
      next(new AppError("Validation Error : " + err.issues.map(e => e.message).join(", "), 400))
    } else {
      next(new AppError(err.message || "Unexpected Error Occured!", 500))
    }
  }
}

export async function updateEvent(req : any, res: Response, next : NextFunction) {
  try {
    const bodyData= eventUpdateSchema.parse(req.body)
    const userId = req.user.id;
    const weekNum = parseInt(req.params.weekNum)
    const updatedEvent= await prisma.event.update({
      where : {
        week_userId : {
          week : weekNum,
          userId
        }
      },
      data : bodyData
    })
    res.status(201).json({
      data : updatedEvent,
      message : "Event Updated Successfully!"
    })
  } catch (err: any) {
    if (err instanceof ZodError) {
      next(new AppError("Validation Error : " + err.issues.map(e => e.message).join(", "), 400))
    } else {
      next(new AppError(err.message || "Unexpected Error Occured!", 500))
    }
  }
}