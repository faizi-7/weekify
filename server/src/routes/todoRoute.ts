import { Router } from "express";
import { isCompleteAuth } from "../middleware/auth";
import { addTodo, deleteTodo, markCompleted } from "../controllers/todoController";

const router= Router()

router.post('/:weekId', isCompleteAuth, addTodo)
router.delete('/:todoId', isCompleteAuth, deleteTodo)
router.put('/:todoId', isCompleteAuth, markCompleted)

export default router