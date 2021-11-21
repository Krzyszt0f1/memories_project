import * as api from '../api'
import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from '../constants/actionTypes'

// Action creators

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts()
    dispatch({ type: FETCH_ALL, payload: data })
  } catch (err) {
    throw err
  }
}

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost)
    dispatch({ type: CREATE, payload: data })
  } catch (err) {
    throw err
  }
}

export const updatePost = (id, newPost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, newPost)
    dispatch({ type: UPDATE, payload: data })
  } catch (err) {
    throw err
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)
    dispatch({ type: DELETE, payload: id })
  } catch (err) {
    throw err
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id)
    dispatch({ type: LIKE, payload: data })
  } catch (err) {
    throw err
  }
}
