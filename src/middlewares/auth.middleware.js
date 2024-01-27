import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  const token = req.cookies.token;

  //validar token
  if (!token) {
    return res.status(401).json({
      message: "No autorizado",
    });
  }

  //verificar token
  jwt.verify(token, "secretkey", (err, decoded) => {
    if (err)
      return res.status(401).json({
        message: "No autorizado",
      });

    req.userId = decoded.id;

    //console.log(decoded);
    next();
  });
};
