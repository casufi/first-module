import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch
} from "react-router-dom";

import Home from "./Home"
import Dashboard from "./Dashboard"

const FirstRoutes = (props) => {
	let { path, url } = useRouteMatch();

	return (
		<div className="card">
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

const First = (props) => {

	return (
		<div className="card">
			<Router>
				<FirstRoutes/>
			</Router>
		</div>
	);
};

console.log("First component", {First, window})
export default First;
if (window) {
	window.First = First
}
