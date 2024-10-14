import { Router } from "express";
import { isAuthenticated, isCompleteAuth } from "../middleware/auth";
import { addWeekContent, createEvent, getAllWeeks, getPresentWeek, getSingleWeek, updateEvent } from "../controllers/weekController";

const router= Router()

router.get('/', isAuthenticated, getAllWeeks)
router.get('/now', isAuthenticated, getPresentWeek)

router.get('/:weekNum', isAuthenticated, getSingleWeek)

router.put('/add/:weekNum', isAuthenticated, addWeekContent)

router.post('/event/:weekNum', isAuthenticated, createEvent)

router.put('/event/:weekNum', isAuthenticated, updateEvent)

export default router