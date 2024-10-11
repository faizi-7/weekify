import { NextFunction, Request, Response } from "express";
import { authUpdateSchema } from "../validator/validators";
import prisma from "../utils/prisma";

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
								completed : true
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

        const createMany = await prisma.week.createMany({
            data: weeks,
            skipDuplicates: true,
        });

        res.status(200).send(`User with id ${updateUser.id} updated successfully!`);
    } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred.');
    }
}
