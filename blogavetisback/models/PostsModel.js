import { Model } from 'objection'
// import CommentsModel from "./CommentsModel.js"
import UserModel from './UserModel.js'

class PostsModel extends Model {
  static tableName = 'posts'

  static get relationMappings() {
    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: 'posts.userId',
          to: 'users.id',
        },
      },
      
      comments: {
        relation: Model.HasManyRelation,
        modelClass: CommentsModel,
        join: {
          from: "posts.id",
          to: "comments.postId",
        },
      },
      
    }
  }
}

export default PostsModel;