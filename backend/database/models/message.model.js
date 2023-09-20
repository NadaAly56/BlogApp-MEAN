import mongoose from 'mongoose'
const messageSchema = mongoose.Schema({
    message: {
        type: String,
        minLength: 1,
        // required: true
    },
    sender: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    receiver: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
},
{
    timestamps: true
})

export const messageModel = mongoose.model('message', messageSchema)