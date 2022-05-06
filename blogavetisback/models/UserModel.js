import { Model } from "objection";
import CommentsModel from "./CommentsModel.js";
import PostsModel from "./PostsModel.js";
import RoleModel from "./RoleModel.js";

class UserModel extends Model {
  static tableName = "users";
  static get relationMappings() {
    return {
      comments: {
        relation: Model.HasManyRelation,
        modelClass: CommentsModel,
        join: {
          from: "users.id",
          to: "comments.userId",
        },
      },
      posts: {
        relation: Model.HasManyRelation,
        modelClass: PostsModel,
        join: {
          from: "users.id",
          to: "posts.userId",
        },
      },
      role: {
        relation: Model.HasOneRelation,
        modelClass: RoleModel,
        join: {
          from: "users.roleId",
          to: "roles.id",
        },
      },
    };
  }
}
export default UserModel;
