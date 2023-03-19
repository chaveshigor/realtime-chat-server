import { EntityTarget, ObjectLiteral, Repository } from 'typeorm';
import AppDataSource from '../../configs/db/data-source';

class ApplicationController {
  getRepository<T extends ObjectLiteral>(
    entity: EntityTarget<T>,
  ): Repository<T> {
    return AppDataSource.getRepository<T>(entity);
  }
}

export default ApplicationController;
