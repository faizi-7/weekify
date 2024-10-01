import { Router } from "express";
import passport from "passport";
import { AppError } from "../utils/AppError";
const router= Router()

router.get("/login/success", (req, res, next) => {
	if (req.user) {
		res.status(200).json({
			message: "Successfully Loged In",
			user: req.user,
		});
	} else {
    next(new AppError("User not found!", 404))
	}
});

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

router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(new AppError(err.message, 500));
    }
    res.redirect(process.env.CLIENT_URL || "");
  });
});

export default router