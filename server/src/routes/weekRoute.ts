import { Router } from "express";
import { isAuthenticated, isCompleteAuth } from "../middleware/auth";
import { addWeekContent } from "../controllers/weekController";

const router= Router()

router.put('/add/:weekNum', isAuthenticated, addWeekContent)


export default router