import cors from 'cors'
import express, { json } from 'express'
import knex from 'knex'
import { Model } from 'objection'
import knexfile from './knexfile.js'
import config from './config.js'
// import commentRoute from "./src/routes/comments.js"
import postsRoute from './routes/posts.js'
// import securityRoute from ".routes/security.js"
import usersRoute from './routes/users.js'

const app = express()
const db = knex(knexfile)

Model.knex(db)

app.use(json())
app.use(cors())

usersRoute({ app, db })
postsRoute({ app, db })
// commentRoute({ app, db })
// securityRoute({ app, db })
// productsRoute({ app, db })

app.listen(config.port, () => console.log(`Listening on : ${config.port}`))