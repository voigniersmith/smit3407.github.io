import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'react-router-dom/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.menuButton}>
            <Button color="inherit" component={Link} to='/' >Home</Button>
            <Button color="inherit" component={Link} to='/about' >About</Button>
            <Button color="inherit" component={Link} to='/topics' >Topics</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}