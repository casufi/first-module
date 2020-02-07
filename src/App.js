import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import Home from "./components/Home"
import Dashboard from "./components/Dashboard"

const FirstRoutes = (props) => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/`}>Start</Link>
        </li>
        <li>
          <Link to={`${url}/dashboard`}>Dashboard</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <Home/>
        </Route>
        <Route path={`${path}/dashboard`}>
          <Dashboard/>
        </Route>
      </Switch>
    </div>
  );
};

const App = (props) => {

  return (
    <div className="card">
      <Router>
        <FirstRoutes/>
      </Router>
    </div>
  );
};

export default App;
