import { Model } from "objection";
import UserModel from "./UserModel.js";

class RoleModel extends Model {
  static tableName = "roles";
  static get relationMappings() {
    return {
      roles: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: "roles.id",
          to: "users.role_id",
        },
      },
    };
  }
}

export default RoleModel;
