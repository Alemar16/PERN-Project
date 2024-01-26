import { Router } from "express";
import {
  postSignout,
  postSignup,
  postSignin,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/signin", postSignin);

router.post("/signup", postSignup);

router.post("/signout", postSignout);

export default router;
