import jsonwebtoken from 'jsonwebtoken'
import config from '../config.js'
import hashPassword from '../hashPassword.js'
import UserModel from '../models/UserModel.js'

const securityRoute = ({ app, db }) => {
  app.post('/signIn', async (req, res) => {
    const {
      body: { email, password }
    } = req

    const user = await UserModel.query().findOne({ email })

    if (!user) {
      res.status(401).send({ error: 'invalid email or password' })

      return
    }
    const [passwordHash] = hashPassword(password, user.passwordSalt)

    if (passwordHash !== user.passwordHash) {
      res.status(401).send({ error: 'invalid email or password' })

      return
    }
    const jwt = jsonwebtoken.sign(
      { payload: { userId: user.id } },
      config.security.session.secret,
      { expiresIn: config.security.session.expiresIn }
    )
    res.send({ jwt })
  })
}
export default securityRoute
