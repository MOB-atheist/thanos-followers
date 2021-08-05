import {
  AppBar,
  Button,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import React from 'react'
// import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}))

export const Navbar: React.FC = () => {
  const classes = useStyles()

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          Thanos Followers
        </Typography>
        <nav>
          <Link
            variant="button"
            color="textPrimary"
            href="/"
            className={classes.link}
          >
            HOME
          </Link>
        </nav>
        <Button
          href="#"
          color="primary"
          variant="contained"
          className={classes.link}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
    // <nav>
    //   <div className="nav-wrapper cyan darken-1 px1">
    //     <span>a</span>
    //   </div>
    // </nav>
  )
}
