import { AppDataSource } from '../configs/db/data-source';

export const initializeInfra = async(callback: () => void) => {
  new Promise(async(res) => {
    await AppDataSource.initialize();
    console.log('💽 Database connected');

    callback();
  })
};

