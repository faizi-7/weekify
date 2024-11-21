import { Router } from "express";
import passport from "passport";
import { AppError } from "../utils/AppError";
import { isAuthenticated } from "../middleware/auth";
import { authUpdate, getUser, logoutUser, registerUserLocal } from "../controllers/authController";

const router= Router()

router.get("/user", getUser);

router.get("/login/failed", (req, res, next) => {
	next(new AppError("Login Failed", 401))
});

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: '/auth/user',
		failureRedirect: "/login/failed",
	})
);

router.put("/user/update", isAuthenticated, authUpdate)

router.get('/logout', logoutUser);

// manual authentication

router.post('/register', registerUserLocal)

// router.post('/login', passport.authenticate('local', {
//   successRedirect: '/auth/user',
//   failureRedirect: '/auth/login/failed',
//   failureMessage: true,
// }));
router.post('/login', passport.authenticate('local', {
  failureRedirect: '/auth/login/failed',
  // failureMessage: true,
}), (req, res) => {
  // Redirect explicitly using GET
  res.redirect('/auth/user');
});



export default router