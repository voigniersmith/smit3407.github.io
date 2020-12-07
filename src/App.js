import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

// Pages Import
import Home from './pages/home';
import About from './pages/about';
import Topics from './pages/topics';
import me from './pictures/IMG_1440.jpg'

// Material UI Stuff
// import Appbar from './components/appbar';
import MyCard from './components/myCard';
import Tabs from './components/tabs';
import { Card, CardMedia, Grid, Paper } from '@material-ui/core';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about" component={About}>
            <About />
          </Route>
          <Route path="/topics" component={Topics}>
            <Topics />
          </Route>
          <Route path="/home" component={Home}>
            <Home />
          </Route>
          <Route path="/">

          </Route>
        </Switch>

        <br></br>
        <br></br>
        <Grid container justify="center" spacing={4}>
          <Grid item>
            <MyCard />
          </Grid>

          <Grid item>
            <Paper>
              <Tabs/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}
