import { Model } from 'objection';

class UserModel extends Model {
  static tableName = 'users';
}
export default UserModel;