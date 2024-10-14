import { z } from "zod";

export const authUpdateSchema= z.object( {
  dob : z.string().date(),
  expectedAge : z.number().positive().finite()
})

export const weekAddSchema= z.object({
  story : z.string().min(10, "Alteast 10 characters are required!").max(1000),
  note : z.string().min(10, "Aleast 10 characters are required!").max(5000),
  reaction : z.enum(["THRILLED", "HAPPY","NEUTRAL", "UNHAPPY", "MISERABLE"])
})

export const todoSchema= z.object({
  title : z.string().min(1).max(1000)
})
export const eventSchema= z.object({
  title : z.string().min(1).max(1000),
  description : z.string().max(5000).optional(),
  date : z.string().date()
})

export const eventUpdateSchema= z.object({
  title : z.string().min(1).max(1000).optional(),
  description : z.string().max(5000).optional(),
})

export const registerUserSchema= z.object({
  email : z.string().email(),
  password : z.string().min(6).max(100),
  fullname : z.string().min(1).max(100)
})