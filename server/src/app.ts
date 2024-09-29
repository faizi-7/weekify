import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import { globalErrorHandler } from './middleware/globalError';
import { AppError } from './utils/AppError';

const app= express()
app.use(express.json());
app.use(cors())

// Get Test Routes
app.get('/', (req, res) => {
  res.send("API Initiated!")
})


// Handle not-found routes
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});


app.use(globalErrorHandler)

export default app