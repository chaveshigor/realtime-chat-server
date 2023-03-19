import AppDataSource from '../configs/db/data-source';

const initializeInfra = async (callback: () => void) => {
  // eslint-disable-next-line no-new, no-async-promise-executor
  new Promise(async () => {
    await AppDataSource.initialize();
    console.log('💽 Database connected');

    callback();
  });
};

export default initializeInfra;
