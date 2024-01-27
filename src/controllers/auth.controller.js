import bcrypt from "bcrypt";
import { pool } from "../db.js";

export const signin = (req, res) => {
  res.send("Iniciando sesion");
};

//sign up
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    //insertar usuario
    const result = await pool.query(
      "INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *",
      [name, email, hashedPassword]
    );
    console.log(result);

    return res.json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        message: "Ya existe un usuario con ese correo",
      });
    }
  }
};

export const signout = (req, res) => {
  res.send("Cerrando sesion");
};

export const profile = (req, res) => {
  res.send("Perfil de usuario");
};
