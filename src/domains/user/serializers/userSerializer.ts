import User from '../../../entities/user';
import ApplicationSerializer from '../../../lib/serializer';

class UserSerializer extends ApplicationSerializer {
  constructor(user: User) {
    super(user);
    this.setAttributes(['name', 'username']);
  }
}

export default UserSerializer;
