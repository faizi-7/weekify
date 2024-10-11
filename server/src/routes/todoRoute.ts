import { Router } from "express";
import { isCompleteAuth } from "../middleware/auth";
import { addTodo, deleteTodo } from "../controllers/todoController";

const router= Router()

router.post('/:weekId', isCompleteAuth, addTodo)
router.delete('/:todoId', isCompleteAuth, deleteTodo)

export default router