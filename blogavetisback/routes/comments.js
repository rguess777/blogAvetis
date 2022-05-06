import CommentsModel from '../models/CommentsModel.js'
import PostsModel from '../models/PostsModel.js'

const commentsRoute = ({ app }) => {
  app.post('/comments', async (req, res) => {
    const {
      body: { content, postId, userId }
    } = req
    try {
      const comment = await CommentsModel.query().insertAndFetch({
        content,
        userId,
        postId
      })
      res.send(comment)
    } catch (err) {
      console.log(err)
      res.status(500).send({ error: 'oops.' })
    }
  })

  app.get('/comments/:commentId', async (req, res) => {
    const {
      params: { commentId }
    } = req

    if (!commentId) {
      res.send({ status: 404, message: 'not found' })
      return
    }
    const comment = CommentsModel.query().findById(commentId)
    if (!comment) {
      res.send({ status: 404, message: 'not found' })

      return
    }

    res.send(comment)
  })

  app.delete('/comments/:commentId', async (req, res) => {
    const {
      params: { commentId }
    } = req

    const comment = await CommentsModel.query().findById(commentId)
    if (!comment) {
      res.status(404).send({ error: 'not found' })
      return
    }
    CommentsModel.query().where({ commentId }).delete()
    res.send('comment deleted')
  })
  app.put('/comments/:id', async (req, res) => {
    const {
      params: { id },
      body: { content }
    } = req

    const comment = PostsModel.query().findById(id)

    if (!comment) {
      res.status(404).send({ error: 'not found' })

      return
    }

    await CommentsModel.query()
      .update({
        content
      })
      .where({ id })
    res.send({ status: 200, message: 'OK' })
  })
}
export default commentsRoute
