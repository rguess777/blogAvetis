import UserModel from '../../blogavetisback/models/UserModel.js'
import hashPassword from '../hashPassword.js'
import auth from '../middlewares/auth.js'

const usersRoute = ({ app }) => {
  app.post('/users', async (req, res) => {
    const {
      body: { email, password }
    } = req

    const [passwordHash, passwordSalt] = hashPassword(password)
    const user = await UserModel.query().insertAndFetch({
      email,
      passwordHash,
      passwordSalt,
      roleId: 1
    })
    res.send(user)
  })

  app.get('/users', async (req, res) => {
    res.send(await UserModel.query())
  })

  app.get('/users/:userId', auth, async (req, res) => {
    const {
      params: { userId },
      session: { userId: sessionUserId }
    } = req
    console.log('test')
    if (Number(userId) !== sessionUserId) {
      console.log(sessionUserId)
      res.status(403).send({ error: 'forbidden' })

      return
    }

    const user = await UserModel.query().findById(userId)
    if (!user) {
      res.status(404).send({ error: 'not found' })
      return
    }
    res.send(user)
  })

  app.put('/users/:userId', async (req, res) => {
    const {
      params: { userId: rawuserId }
    } = req
    const userId = Number(rawuserId)
    const [user] = await UserModel.query().findById(userId)
    if (!user) {
      res.status(404).send({ error: 'not found' })
    }
    res.send(user)
  })
  app.delete('/users/:userId', async (req, res) => {
    const {
      params: { userId: rawuserId }
    } = req
    const userId = Number(rawuserId)

    const user = await UserModel.query().findById(userId)
    if (!user) {
      res.status(404).send({ error: 'not found' })
      return
    }
    await user.$query().delete()
    res.send(user)
  })
}
export default usersRoute
