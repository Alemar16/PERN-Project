import { Router } from "express";

const router = Router();

router.get("/tasks", (req, res) => {
  res.send("Obteniendo tareas");
});

router.get("/tasks/:id", (req, res) => {
  res.send("Obteniendo una tarea unica");
});
router.post("/tasks", (req, res) => {
  res.send("creando tarea");
});
router.put("/tasks/:id", (req, res) => {
  res.send("Actualizando tarea unica");
});
router.delete("/tasks/:id", (req, res) => {
  res.send("Eliminando tarea");
});

router.get("/profile", (req, res) => {
  res.send("Perfil de usuario");
})

export default router;
