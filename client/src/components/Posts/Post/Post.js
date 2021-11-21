import { Button, Card, CardActions, CardContent, CardMedia, Typography,makeStyles } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ThumpUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import moment from 'moment'
import React from 'react'
import { useDispatch } from 'react-redux'

import { deletePost, likePost } from '../../../actions/posts'

const useStyles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken'
  },
  border: {
    border: 'solid'
  },
  fullHeightCard: {
    height: '100%'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white'
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white'
  },
  grid: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px'
  },
  title: {
    padding: '0 16px'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleDelete = async (e) => {
    // to avoid refresh in the browser use:
    e.preventDefault()

    await dispatch(deletePost(post._id))
  }

  const handleLike = async (e) => {
    // to avoid refresh in the browser use:
    e.preventDefault()

    await dispatch(likePost(post._id))
  }

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size='small' onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize='medium' />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>{post.tags.map(tag => `#${tag} `)}</Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} gutterBottom variant='h5' component='h2'>{post.title}</Typography>
      </CardContent>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary' component='p'>{post.message}</Typography>
      </div>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' onClick={handleLike}>
          <ThumpUpAltIcon fontSize='small' />
          &nbsp; Like &nbsp;
          {post.likeCount}
        </Button>
        <Button size='small' color='primary' onClick={handleDelete}>
          <DeleteIcon fontSize='small' />
          &nbsp; Delete &nbsp;
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
