import express from 'express'
import { getMessages, sendMessage } from './message.controller.js'
import userRouter from '../user/user.router.js'
import { userAuth } from '../../middleWare/auth.js'

export const messageRouter = express.Router()

messageRouter.post('/', userAuth, sendMessage)
messageRouter.get('/', userAuth, getMessages)