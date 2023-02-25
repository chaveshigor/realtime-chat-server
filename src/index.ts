import express from 'express';
import router from './routes';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
