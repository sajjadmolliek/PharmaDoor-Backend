import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/router';
import globalErrorHandler from './app/middlewares/globalErrorHandeller';
import notFound from './app/middlewares/not-found';
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);

//not error handeller
app.use(notFound);

export default app;
