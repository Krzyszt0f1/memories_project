import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js'

// initialise the backend app :)
const app = express()

// making the app run with secrets defined in .env
dotenv.config()

// to limit the size of images to be received
app.use(bodyParser.json({
  limit: '30mb',
  extended: true
}))

app.use(bodyParser.urlencoded({
  limit: '30mb',
  extended: true
}))

// set up to use cors
app.use(cors())

// making the app use post.js request handlers
// this has to be specified after configuring the cors
app.use('/posts', postRoutes)

// from mongo db atlas cluster
const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000

// connect to mongoose

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
}).catch((err) => console.log(err.message))
