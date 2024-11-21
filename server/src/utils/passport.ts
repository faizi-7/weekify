import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { Strategy as LocalStrategy } from "passport-local"
import passport from 'passport'
import { AppError } from "./AppError";
import prisma from "./prisma";
import { comparePassword } from "./utilMethod";

const GOOGLE_CLIENT = process.env.CLIENT_ID
const GOOGLE_SECRET = process.env.CLIENT_SECRET
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
				return done(error);
			}
		}

	)
);
passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
},
	async function (email, password, done) {
		try {
			if (!email || !password) {
				return done(null, false, { message: 'Email and password are required.' });
			}

			const user = await prisma.user.findUnique({
				where: { email }
			});
			if (!user || !user.password) {
				return done(null, false, { message: 'Invalid email or password.' });
			}
			const res = await comparePassword(password, user.password);
			if (!res) {
				return done(null, false, { message: 'Invalid email or password.' });
			}
			return done(null, user);

		} catch (err) {
			 done(err);
		}
	}
));

// passport.serializeUser((user:any, done) => {
// 	const userId = user.id;
// 	done(null, userId);
// });

// passport.deserializeUser(async (userId: string, done) => {
// 	try {
// 		const user = await prisma.user.findUnique({ where: { id: userId } });
// 		if (!user) {
// 			return done(new Error("User not found"), null);
// 		}
// 		done(null, user);
// 	} catch (err) {
// 		done(err, null);
// 	}
// });

passport.serializeUser((user: any, done) => {
	if (!user.id) {
			return done(new Error("User ID missing during serialization"), null);
	}
	done(null, user.id);
});

passport.deserializeUser(async (userId: string, done) => {
	try {
			const user = await prisma.user.findUnique({ where: { id: userId } });
			if (!user) {
					return done(new Error("User not found"), null);
			}
			done(null, user);
	} catch (error) {
			done(error, null);
	}
})
