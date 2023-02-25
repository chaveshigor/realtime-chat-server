import express from 'express';
import router from './routes';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(router);
app.use(express.json());

export default app;
