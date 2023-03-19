import 'reflect-metadata';

import { DataSource } from 'typeorm';
import User from '../../entities/user';
import Message from '../../entities/message';
import Chat from '../../entities/chat';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Chat, Message],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
