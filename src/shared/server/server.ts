import express, { Request, Response, NextFunction } from 'express'
import { errors } from 'celebrate'
import 'express-async-errors'
import cors from 'cors'
import 'dotenv/config'
import 'module-alias/register'
import AppError from '@shared/errors/AppError'
import { SERVER_PORT } from '@config/variable'
import routes from './routes'
import '../database'
import '@shared/container'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use(errors())

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
})

app.listen(SERVER_PORT, () => {
  console.log('server running ✨ ✔ ❤')
})
