import { Router} from "express";

const router = Router();

router.post("/signin", (req, res) => {
    res.send("Iniciando sesion");
})

router.post("/signup", (req, res) => {
    res.send("Registrando usuario");
})

router.post("/signout", (req, res) => {
    res.send("Cerrando sesion");
})

export default router