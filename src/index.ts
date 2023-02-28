import * as dotenv from 'dotenv';
dotenv.config();

import { server } from './infra/io';

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Websocket listening on port ${port}`);
  console.log(`Listening on port ${port}`);
});
