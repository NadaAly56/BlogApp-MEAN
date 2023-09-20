import { messageModel } from "../../../database/models/message.model.js"
import { io } from "../../../index.js";

const sendMessage = async(req, res) => {
    const { message } = getMessages
    console.log('from controller',getMessages);
    const  receiver  = req.header('receiver')
    const sender = req.userId
    await messageModel.insertMany({ message})
    res.json({msg:'success'})
}


const getMessages = async(req,res) => {
    const receiver = req.userId
    const messages = await messageModel.find({receiver}).populate('sender', 'name')
    // socket.emit('get message', messages)
    res.json({msg:'success', messages})
}
export {
    sendMessage,
    getMessages
}