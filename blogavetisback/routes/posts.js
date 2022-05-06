import PostsModel from '../../blogavetisback/models/PostsModel.js'

const postsRoute = ({ app, db }) => {
  app.post('/posts', async (req, res) => {
    const {
      body: { title, content, userId }
    } = req
    try {
      const post = await PostsModel.query().insertAndFetch({
        title,
        content,
        userId
      })
      res.send(post)
    } catch (err) {
      console.log(err)
      res.status(500).send({ error: 'severside error.' })
    }
  })

  app.get('/posts', async (req, res) => {
    res.send(await PostsModel.query().withGraphFetched('author'))
  })

  app.get('/posts/:postId', async (req, res) => {
    const {
      params: { postId }
    } = req

    const query = PostsModel.query().withGraphFetched('[author, comments.user]')
    if (postId) {
      query.findById(postId)
    }
    res.send(await query)
  })

  app.delete('/posts/:postId', async (req, res) => {
    const {
      params: { postId }
    } = req

    const post = await PostsModel.query().findById(postId)
    if (!post) {
      res.status(404).send({ error: 'not found' })
    }
    await post.$query().delete()
    res.send(post)
  })
}
export default postsRoute
