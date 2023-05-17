import express from "express";
import { getMyProfile, login, logout, register } from "../Controllers/User.js";
import { isAuthenticated } from "../Middlewares/auth.js";

const router = express.Router()

router.post("/login",login)
router.post("/register",register)
router.get("/logout",isAuthenticated,logout)
router.get("/me",isAuthenticated,getMyProfile)



export default router;
