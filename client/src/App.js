import { AppBar, Container, Grid, Grow, Typography,makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import memories from './images/memories.png'

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    color: 'rgba(0,183,255, 1)'
  },
  image: {
    marginLeft: '15px'
  },
  [theme.breakpoints.down('sm')]: {
    memoriesContainer: {
      flexDirection: 'column-reverse'
    }
  }
}))

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch, currentId])

  return (
    <Container maxidth='lg'>
      <AppBar position='static' color='inherit' className={classes.appBar}>
        <Typography variant='h2' align='center' className={classes.heading}>
                  Memories
        </Typography>
        <img src={memories} alt='memories' height='60' className={classes.image} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={3} className={classes.memoriesContainer}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
