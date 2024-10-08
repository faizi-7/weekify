import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import { globalErrorHandler } from './middleware/globalError';
import { AppError } from './utils/AppError';
import passport from 'passport';
import session from 'express-session';
import authRoutes from './routes/authRoute'
import weekRoutes from './routes/weekRoute'
import './utils/passport'


const app= express()
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(cors())

// Get Test Routes
app.get('/', (req, res) => {
  res.send("API Initiated!")
})

app.use('/auth', authRoutes)
app.use('/week', weekRoutes)

// Handle not-found routes
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});


app.use(globalErrorHandler)

export default app