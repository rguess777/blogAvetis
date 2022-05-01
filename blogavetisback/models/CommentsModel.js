import { Model } from 'objection';
import UserModel from './UserModel.js';

class CommentsModel extends Model {
  static tableName = 'Comments';

  static get relationMappings() {
    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: 'comments.userId',
          to: 'users.id',
        },
      },
      comments: {
        relation: Model.HasManyRelation,
        modelClass: CommentsModel,
        join: {
          from: 'comments.id',
          to: 'users.postId',
        },
      },
    };
  }
}

export default PostModel;