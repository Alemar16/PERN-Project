import Router  from "express-promise-router";
import {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";
import {validateSchema} from "../middlewares/validate.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

//rutas protegidas por middleware de autenticacion(isAuth)
router.get("/tasks", isAuth, getAllTasks);

router.get("/tasks/:id", isAuth, getTask);

router.post("/tasks", isAuth, validateSchema(createTaskSchema), createTask);

router.put("/tasks/:id", isAuth, updateTask);

router.delete("/tasks/:id", isAuth, deleteTask);

export default router;
 