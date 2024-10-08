import { Router } from "express";
import { isCompleteAuth } from "../middleware/auth";
import { addWeekContent } from "../controllers/weekController";

const router= Router()

router.put('/add/:weekNum', isCompleteAuth, addWeekContent)

export default router