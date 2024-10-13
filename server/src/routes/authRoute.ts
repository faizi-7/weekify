import { Router } from "express";
import passport from "passport";
import { AppError } from "../utils/AppError";
import { isAuthenticated } from "../middleware/auth";
import { authUpdate, getUser, logoutUser } from "../controllers/authController";
const router= Router()

router.get("/login/success", getUser);

router.get("/login/failed", (req, res, next) => {
	next(new AppError("Login Failed", 401))
});

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: process.env.CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);

router.put("/user/update", isAuthenticated, authUpdate)

router.get('/logout', logoutUser);

export default router