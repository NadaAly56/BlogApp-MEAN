import mongoose from "mongoose";

const blogShcema = mongoose.Schema({
    title: String,
    description: String,
    quote:String,
    type: {
        type: String,
        enum: ['article', 'quote'],
        default: 'article'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
}, {
    timestamps: true
})
export const blogModel = mongoose.model('blog', blogShcema)