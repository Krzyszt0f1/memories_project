// place to keep all of the logic for posts routes
// it is for better scalability
import PostMessage from '../models/postMessage.js'
import mongoose from 'mongoose'

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find()
    res.status(200).json(postMessages)
  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
}

export const createPost = async (req, res) => {
  const post = req.body
  const newPost = new PostMessage(post)
  try {
    await newPost.save()
    res.status(201).json(newPost)
  } catch (err) {
    res.status(409).json({
      message: err.message
    })
  }
}

export const updatePost = async (req, res) => {
  const { id } = req.params
  const { title, message, creator, selectedFile, tags } = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

  try {
    const updatedPost = { creator, title, message, tags, selectedFile, _id: id }
    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true })
    res.json(updatedPost)
  } catch (err) {
    res.status(409).json({
      message: err.message
    })
  }
}

export const deletePost = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

  try {
    await PostMessage.findByIdAndRemove(id)
    res.json({ message: `Post with id: ${id} deleted successfully` })
  } catch (err) {
    res.status(409).json({
      message: err.message
    })
  }
}

export const likePost = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

  try {
    const post = await PostMessage.findById(id)
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })
    res.json(updatedPost)
  } catch (err) {
    res.status(409).json({
      message: err.message
    })
  }
}
