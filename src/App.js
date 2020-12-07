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
// Theme Stuff
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./components/theme";
import "./App.css";

// Material UI Appbar
import Appbar from './components/appbar';

const theme = createMuiTheme(themeFile);

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
          <Switch>
            <Route path="/">
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
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
  );
}
