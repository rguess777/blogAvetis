import dotenv from 'dotenv'
dotenv.config()

const config = {
  port: process.env.PORT,
  db: {
    client: process.env.DB_CLIENT,
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    
  },
  security: {
    password: {
      pepper: process.env.SECURITY_PASSWORD_PEPPER,
      keylen: 128,
      iteration: 100000,
      digest: "sha512",
    },
    session: {
      secret: process.env.SECURITY_SESSION_SECRET,
      expiresIn: "2 days",
    },
  },
}
export default config