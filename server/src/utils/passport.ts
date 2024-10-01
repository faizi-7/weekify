import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import passport from 'passport'
import { AppError } from "./AppError";

const GOOGLE_CLIENT= process.env.CLIENT_ID
const GOOGLE_SECRET= process.env.CLIENT_SECRET
console.log(GOOGLE_CLIENT, GOOGLE_SECRET)
if (!GOOGLE_CLIENT || !GOOGLE_SECRET) {
  throw new AppError("Missing Google OAuth credentials (CLIENT_ID or CLIENT_SECRET).", 404);
}

passport.use(
	new GoogleStrategy(
		{
			clientID: GOOGLE_CLIENT,
			clientSecret: GOOGLE_SECRET,
			callbackURL: "http://localhost:3000/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, done) {
			done(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user:any, done) => {
	done(null, user);
});