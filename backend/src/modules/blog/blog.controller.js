import { blogModel } from "../../../database/models/blog.model.js"
import jwt from "jsonwebtoken"

const getAllBlogs = async (req, res) => {
    const blogs = await blogModel.find().populate('createdBy');
    res.json({blogs})
}

const getUserBlogs = async (req, res) => {
    const  id  = req.userId
    const blogs = await blogModel.find({createdBy: id}).populate('createdBy', 'name _id')
    res.json({blogs})
}
const getBlogDetailes = async (req, res) => {
    const { id } = req.params
    const blogs = await blogModel.find({_id: id}).populate('createdBy', 'name -_id')
    res.json({blogs})
}

const addBlog = async (req, res)=> {
    const {title, description, quote, type} = req.body
    await blogModel.insertMany({title, description, quote, createdBy:  req.userId, type})
    res.json({msg: 'success'})
}

const updateBlog = async (req, res)=> {
    const {_id, title, description, quote} = req.body
    const UpdatedBlog = await blogModel.findByIdAndUpdate({_id}, {title, description, quote}, {new:true})
    if (UpdatedBlog)
        res.json({UpdatedBlog})
    else res.json({msg: 'blog not found'})
}

const deleteBlog = async (req, res)=> {
    const {id} = req.params
    const deletedBlog = await blogModel.findByIdAndDelete({_id: id})
    if (deletedBlog)
        res.json({msg:'success', deletedBlog})
    else res.json({msg: 'blog not found'})
}
export {
    getAllBlogs,
    addBlog,
    updateBlog,
    deleteBlog,
    getUserBlogs,
    getBlogDetailes,
}