import { Router } from "express";
import {
  postSignout,
  postSignup,
  postSignin,
  getProfile,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/signin", postSignin);

router.post("/signup", postSignup);

router.post("/signout", postSignout);

router.ger("/profile", getProfile);

export default router;
