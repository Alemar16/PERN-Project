import Jwt from "jsonwebtoken";

export const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    Jwt.sign(
      payload,
      //se puede usar process.env.JWT_SECRET,
      "secretkey",
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};
