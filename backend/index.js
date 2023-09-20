import express from "express";
import * as dotenv from 'dotenv'
import { dbConnection } from "./database/dbConnection.js";
import userRouter from "./src/modules/user/user.router.js";
import { blogRouter } from "./src/modules/blog/blog.router.js";
import cors from "cors"
import { messageRouter } from "./src/modules/message/message.router.js";
import { Server } from "socket.io";
import { messageModel } from "./database/models/message.model.js";
import jwt from "jsonwebtoken"

const app =  express();

app.use(cors())
dotenv.config();
dbConnection();
app.use(express.json());
app.use("/users", userRouter);
app.use("/blogs", blogRouter)
app.use("/messages", messageRouter)

const server = app.listen(process.env.PORT, ()=>{
    console.log("Application started");
})
export let getMessages;
export const io = new Server(server, {
    cors:'*'
})
io.on('connection', async(socket)=>{
    console.log('a user connected');
    
    socket.on('chat message', async(msg)=>{
        console.log(msg);
        const {message, receiver, token} = msg
        let sender
        jwt.verify(token, process.env.JWT_KEY, async function(err, decoded){
            sender = decoded.user._id
        })
          await messageModel.insertMany({message, receiver, sender})
         const userMessages = await messageModel.find({receiver}).populate('sender', 'name')
         socket.emit('get message', userMessages)
    })
    
    // getUserMessages(socket)
    
    socket.on('disconnect', () => {
    console.log('user disconnected');
  });
})
async function getUserMessages(socket){
    let userID
    socket.on('get token', (token)=>{
        jwt.verify(token, process.env.JWT_KEY, async function(err, decoded){
            userID = decoded.user._id
        })
    })
    const messages = await messageModel.find({userID}).populate('sender', 'name')
    socket.emit('get message', messages)
}