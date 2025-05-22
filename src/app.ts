import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/router';
import cookieParser from 'cookie-parser';
import globalErrorHandler from './app/middlewares/globalErrorHandeller';
import notFound from './app/middlewares/not-found';
const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://pharma-door-frontend.vercel.app',
    ],
    credentials: true,
  }),
);
app.use(cookieParser());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);

//not error handeller
app.use(notFound);

export default app;
