import bcrypt from "bcrypt";
import { pool } from "../db.js";
import { createAccessToken } from "../libs/jwt.js";

//sign in
export const signin = async (req, res) => {
  const { email, password } = req.body;

  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (result.rowCount === 0) {
    return res.status(400).json({
      message: "El correo no esta registrado",
    });
  }

  const validPassword = await bcrypt.compare(password, result.rows[0].password);

  if (!validPassword) {
    return res.status(400).json({
      message: "La contraseña es incorrecta",
    });
  }

  const token = await createAccessToken({ id: result.rows[0].id });

  res.cookie("token", token, {
    httpOnly: true,
    //secure: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000, //1 dia
  });
  return res.json(result.rows[0]);
};


//sign up
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    //insertar usuario
    const result = await pool.query(
      "INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *",
      [name, email, hashedPassword]
    );

    //generar token
    const token = await createAccessToken({ id: result.rows[0].id });

    res.cookie("token", token, {
      httpOnly: true,
      //secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000, //1 dia
    });

    return res.json(result.rows[0]);

    //manejo de errores
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
