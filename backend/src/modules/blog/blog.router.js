import express from 'express'
import { addBlog, deleteBlog, getAllBlogs, getBlogDetailes, getUserBlogs, updateBlog } from './blog.controller.js'
import { userAuth } from '../../middleWare/auth.js'
import { validation } from '../../middleWare/validation.js'
import { addBlogSchema } from './blog.validation.js'

export const blogRouter = express.Router()

blogRouter.get('/',userAuth, getAllBlogs)
blogRouter.get('/userblogs',userAuth, getUserBlogs)
blogRouter.get('/:id',userAuth, getBlogDetailes)
blogRouter.post('/add', userAuth, validation(addBlogSchema) , addBlog)
blogRouter.put('/update', userAuth, updateBlog)
blogRouter.delete('/delete/:id', userAuth, deleteBlog)
