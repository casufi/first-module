import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";

const FirstRoutes = props => {
  let {
    path,
    url
  } = useRouteMatch();
  return React.createElement("div", {
    className: "card"
  }, React.createElement("ul", null, React.createElement("li", null, React.createElement(Link, {
    to: `${url}/`
  }, "Start")), React.createElement("li", null, React.createElement(Link, {
    to: `${url}/dashboard`
  }, "Dashboard"))), React.createElement(Switch, null, React.createElement(Route, {
    exact: true,
    path: path
  }, React.createElement(Home, null)), React.createElement(Route, {
    path: `${path}/dashboard`
  }, React.createElement(Dashboard, null))));
};

const First = props => {
  return React.createElement("div", {
    className: "card"
  }, React.createElement(Router, null, React.createElement(FirstRoutes, null)));
};

console.log("First component", {
  First,
  window
});
export default First;

if (window) {
  window.First = First;
}