import { pool } from "../db.js";

export const getAllTasks = async (req, res) => {
  const result = await pool.query("SELECT * FROM task");
  return res.json(result.rows);
};

export const getTask = (req, res) => {
  res.send("Obteniendo una tarea unica");
};

export const createTask = async (req, res, next) => {
  const { title, description } = req.body;
  //db insert
  try {
    const result = await pool.query(
      "INSERT INTO task(title, description) VALUES($1, $2) RETURNING *",
      [title, description]
    );

    //se puede insertar otras querys a partir de aqui

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

export const updateTask = (req, res) => {
  res.send("Actualizando tarea unica");
};

export const deleteTask = (req, res) => {
  res.send("Eliminando tarea");
};
