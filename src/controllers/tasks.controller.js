export const getTasks = (req, res) => {
    res.send("Obteniendo tareas");
};

export const getTask = (req, res) => {
    res.send("Obteniendo una tarea unica");
};

export const createTask = (req, res) => {
    res.send("creando tarea");
};

export const updateTask = (req, res) => {
    res.send("Actualizando tarea unica");
};

export const deleteTask = (req, res) => {
    res.send("Eliminando tarea");
}

export const getProfile = (req, res) => {
    res.send("Perfil de usuario");
  }