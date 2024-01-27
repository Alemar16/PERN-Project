import { pool } from "../db.js";

//obtener todas las tareas
export const getAllTasks = async (req, res) => {
  const result = await pool.query("SELECT * FROM task WHERE user_id = $1", [
    req.userId,
  ]);
  return res.json(result.rows);
};

//obtener una tarea
export const getTask = async (req, res) => {
  const result = await pool.query("SELECT * FROM task WHERE id = $1", [
    req.params.id,
  ]);

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe una tarea  con ese id",
    });
  }
  return res.json(result.rows[0]);
};

//crear una tarea
export const createTask = async (req, res, next) => {
  const { title, description } = req.body;
  //db insert
  try {
    const result = await pool.query(
      "INSERT INTO task (title, description, user_id) VALUES($1, $2, $3) RETURNING *",
      [title, description, req.userId]
    );

    // se pueden agregar otras consultas a partir de aquí

    res.json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        message: "Ya existe una tarea con ese titulo",
      });
    }

    next(error);
  }
};

//actualizar una tarea
export const updateTask = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  const result = await pool.query(
    "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
    [title, description, id]
  );

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe una tarea  con ese id",
    });
  }

  return res.json(result.rows[0]);
};

//borrar una tarea
export const deleteTask = async (req, res) => {
  const result = await pool.query("DELETE FROM task WHERE id = $1", [
    req.params.id,
  ]);
  console.log(result);
  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe una tarea  con ese id",
    });
  }

  return res.send(204);
};
