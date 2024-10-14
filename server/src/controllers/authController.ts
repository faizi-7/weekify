import { NextFunction, Request, Response } from "express";
import { authUpdateSchema, registerUserSchema } from "../validator/validators";
import prisma from "../utils/prisma";
import { AppError } from "../utils/AppError";
import { ZodError } from "zod";
import bcrypt from "bcrypt"

export async function getUser(req: any, res: Response, next: NextFunction) {
    if (req.user) {
        res.status(200).json({
            data: req.user,
        });
    } else {
        next(new AppError("User not found!", 404))
    }
}

export async function logoutUser(req: any, res: Response, next: NextFunction) {
    req.logout((err : any) => {
      if (err) {
        return next(new AppError(err.message, 500));
      }
      res.redirect(process.env.CLIENT_URL || "");
    });
}

export async function authUpdate(req: any, res: Response, next: NextFunction) {
    try {
        const data = authUpdateSchema.parse(req.body);

        const updateUser = await prisma.user.update({
            where: {
                email: req.user?.email || "",
            },
            data: {
                dob: new Date(data.dob),
                expectedAge: data.expectedAge,
                completed: true
            },
        });

        let weeks = [];
        const startDate = new Date(data.dob);
        const endDate = new Date(data.dob);
        endDate.setFullYear(startDate.getFullYear() + data.expectedAge);

        let currentStartDate = new Date(startDate);
        let dayOfWeek = currentStartDate.getDay();
        if (dayOfWeek !== 1) {
            currentStartDate.setDate(currentStartDate.getDate() + (1 - dayOfWeek + 7) % 7);
        }

        let idx = 1;
        while (currentStartDate < endDate) {
            let currentEndDate = new Date(currentStartDate);
            currentEndDate.setDate(currentEndDate.getDate() + 6);

            weeks.push({
                startDate: new Date(currentStartDate),
                endDate: new Date(currentEndDate),
                week: idx,
                userId: req.user.id,
            });

            idx++;
            currentStartDate.setDate(currentStartDate.getDate() + 7);
        }

        const createdWeeks = await prisma.week.createMany({
            data: weeks,
            skipDuplicates: true,
        });

        res.status(201).json({ message: `User with id ${updateUser.id} updated successfully!`, data: createdWeeks });
    } catch (err: any) {
        if (err instanceof ZodError) {
            next(new AppError("Validation Error : " + err.issues.map(e => e.message).join(", "), 400))
        } else {
            next(new AppError(err.message || "Unexpected Error Occured!", 500))
        }
    }
}

export async function registerUserLocal(req: any, res : Response, next : NextFunction) {
    try {
        const bodyData= registerUserSchema.parse(req.body)
        const userExists= await prisma.user.findUnique( {
            where : {
                email : bodyData.email,
            }
        })
        if(userExists) return next(new AppError("User already exists!", 401))
        let hashedPassword= await bcrypt.hash(bodyData.password, 10)
        const user= await prisma.user.create( {
            data : {
                email : bodyData.email,
                password : hashedPassword,
                fullname : bodyData.fullname,
                authProvider : "local"
            }
        })
        res.status(201).json({
            message : "User with email & password registered!",
            data : user
        })
    } catch (err: any) {
        if (err instanceof ZodError) {
            next(new AppError("Validation Error : " + err.issues.map(e => e.message).join(", "), 400))
        } else {
            next(new AppError(err.message || "Unexpected Error Occured!", 500))
        }
    }
}