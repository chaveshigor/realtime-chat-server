import express from 'express';
import router from './routes';
import { initializeInfra } from './infra/initialize';

const app = express();

initializeInfra(() => {
  app.use(express.json());
  app.use(router);
})

export default app;
