  import express, { request, response } from "express"
  import cors from 'cors'
  import dotenv from 'dotenv'
  dotenv.config()
  import cookieParser from 'cookie-parser'
  import morgan from 'morgan'
  import helmet from 'helmet'

  const app = express();
  app.use(cors({
    credentials : true,
    origin : process.env.FRONTEND_URL
  }))

  app.use(express.json())
  app.use(cookieParser())
  app.use(morgan())
  app.use(helmet({
    contentSecurityPolicy : false
  }))

  const PORT = 8081| process.env.PORT

  app.get("/", (request,response) => {
      response.json({
          message : "Server is running"
      })
  })
    

  app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
  })