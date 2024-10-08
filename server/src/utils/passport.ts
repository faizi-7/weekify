import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import passport from 'passport'
import { AppError } from "./AppError";
import prisma from "./prisma";

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
		async function (accessToken, refreshToken, profile, done) {
			try {
				if (!profile || !profile.emails || !profile.emails.length) {
					throw new Error('Profile does not contain required email information');
				}
		
				let user = await prisma.user.upsert({
					where: {
						email: profile.emails[0].value, 
					},
					update: {},
					create: {
						email: profile.emails[0].value,
						profileUrl: profile.photos?.[0]?.value || null,
						fullname: profile.displayName || 'Unknown',
					}
				});
				done(null, user);
			} catch (error) {
				done(error);
			}
		}
		
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user:any, done) => {
	done(null, user);
});