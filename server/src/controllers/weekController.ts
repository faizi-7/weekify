import { NextFunction, Response } from "express";
import { weekAddSchema } from "../validator/validators";
import prisma from "../utils/prisma";
import { ZodError } from "zod";
import { AppError } from "../utils/AppError";
import { getCurrentWeek } from "../utils/utilMethod";

export async function addWeekContent(req: any, res: Response, next: NextFunction) {
  try {
    const data = weekAddSchema.parse(req.body);
    const week= parseInt(req.params.weekNum)
    const currentWeek= getCurrentWeek(req.user.dob)
    if(!(currentWeek-week <=1 && currentWeek-week >=0)) {
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
      message : "Week Update Successful!",
      data: updatedWeek
    });
  } catch (err:any) { 
    if(err instanceof ZodError) {
      next(new AppError("Validation Error : " + err.issues.map(e => e.message).join(", "), 400))
    } else {
      next(new AppError(err.message || "Unexpected Error Occured!", 500))
    }
  }
}
