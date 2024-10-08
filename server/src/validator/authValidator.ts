import { z } from "zod";

export const authUpdateSchema= z.object( {
  dob : z.string().date(),
  expectedAge : z.number().positive().finite()
})