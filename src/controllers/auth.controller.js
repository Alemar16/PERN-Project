export const signin = (req, res) => {
  res.send("Iniciando sesion");
};

export const signup = (req, res) => {
  res.send("Registrando usuario");
};

export const signout = (req, res) => {
  res.send("Cerrando sesion");
};

export const profile = (req, res) => {
    res.send("Perfil de usuario");
}