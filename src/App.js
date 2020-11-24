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

// Material UI Appbar
import Appbar from './components/appbar';

export default function App() {
  return (
    <Router>
      <div>
        <Appbar />

        <Switch>
          <Route path="/about" component={About}>
            <About />
          </Route>
          <Route path="/topics" component={Topics}>
            <Topics />
          </Route>
          <Route path="/" component={Home}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
