import express from 'express';
import cors from 'cors';
import router from './routes';

import initializeInfra from './infra/initialize';

const app = express();

initializeInfra(() => {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    }),
  );
  app.use(express.json());
  app.use(router);
});

export default app;
