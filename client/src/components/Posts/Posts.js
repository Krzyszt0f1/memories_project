import React from 'react'
import { Grid, CircularProgress, makeStyles } from '@material-ui/core'
import Post from './Post/Post'

import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  smMargin: {
    margin: theme.spacing(1)
  },
  actionDiv: {
    textAlign: 'center'
  }
}))

const Posts = ({ setCurrentId }) => {
  const classes = useStyles()
  const posts = useSelector((state) => state.posts)

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid
        className={classes.mainContainer}
        container
        alignItems='stretch'
        spacing={3}
      >
        {
          posts.map((post) => (
            <Grid
              item
              key={post._id}
              xs={12}
              sm={6}
            >
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))
        }
      </Grid>
    )
  )
}

export default Posts
