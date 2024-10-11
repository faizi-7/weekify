import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import session from 'express-session';
import pgSession from 'connect-pg-simple';
import { Pool } from 'pg';
import passport from 'passport';
import { globalErrorHandler } from './middleware/globalError';
import { AppError } from './utils/AppError';
import authRoutes from './routes/authRoute';
import weekRoutes from './routes/weekRoute';
import todoRoutes from './routes/todoRoute';
import './utils/passport';

const app = express();

const pgPool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(
  session({
    store: new (pgSession(session))({
      pool: pgPool,
      createTableIfMissing: true
    }),
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
    
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('API Initiated!');
});

app.use('/auth', authRoutes);
app.use('/week', weekRoutes);
app.use('/todo', todoRoutes);

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
