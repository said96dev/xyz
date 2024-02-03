import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import 'express-async-errors'
//Middleware
//Error MiddleWare
import notFoundMiddleware from './middleware/not-found.js'
import errorHandler from './middleware/error-handler.js'
//DB
import connectDB from './db/connect.js'

//Router
import authRouter from './routes/authRouter.js'
import userRouter from './routes/userRouter.js'
import taskRouter from './routes/taskRouter.js'
import commentRouter from './routes/commentRouter.js'
import recordRouter from './routes/recordingsRouter.js'
import clientRouter from './routes/clientRouter.js'
import projectRouter from './routes/projectRouter.js'
import statsRouter from './routes/statsRouter.js'
import requestRouter from './routes/requestRouter.js'
import movingRouter from './routes/movingRouter.js'

//authentication
import { authentication } from './middleware/authentication.js'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.resolve(__dirname, './client/build')))

app.use(express.json())

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/tasks', authentication, taskRouter)
app.use('/api/v1/comments', authentication, commentRouter)
app.use('/api/v1/records', authentication, recordRouter)
app.use('/api/v1/clients', authentication, clientRouter)
app.use('/api/v1/projects', authentication, projectRouter)
app.use('/api/v1/stats', authentication, statsRouter)
app.use('/api/v1/requests', authentication, requestRouter)
app.use('/api/v1/home', authentication, movingRouter)

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

app.use(notFoundMiddleware)
app.use(errorHandler)

const port = process.env.PORT || 5000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
