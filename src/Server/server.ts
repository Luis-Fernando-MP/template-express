import router from '@/Router/router'
import path from 'path'
import morgan from 'morgan'
import express, { json, Request, Response, urlencoded } from 'express'
import dotEnv from 'dotenv'
import cors from 'cors'

const app = express()
//-> initializations
dotEnv.config({ path: path.resolve(__dirname, '../../.env') })
app.set('PORT', process.env.PORT ?? 3000)

//middleware
app.use('/public', express.static(path.resolve(__dirname, '../Public/')))
app.use(morgan('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cors({ origin: '*', credentials: true }))

//routers
app.use(router)

//default
app.use((_: Request, res: Response) => res.status(404).json('URL not found'))

export default app
