import { Model } from 'objection'
import PostsModel from './PostsModel.js'
import UserModel from './UserModel.js'

class CommentsModel extends Model {
  static tableName = 'comments'

  static get relationMappings () {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: 'comments.userId',
          to: 'users.id'
        }
      },
      comments: {
        relation: Model.HasManyRelation,
        modelClass: PostsModel,
        join: {
          from: 'comments.postId',
          to: 'posts.id'
        }
      }
    }
  }
}

export default CommentsModel
