export const postSignin = (req, res) => {
  res.send("Iniciando sesion");
};

export const postSignup = (req, res) => {
  res.send("Registrando usuario");
};

export const postSignout = (req, res) => {
  res.send("Cerrando sesion");
};

export const getProfile = (req, res) => {
    res.send("Perfil de usuario");
}