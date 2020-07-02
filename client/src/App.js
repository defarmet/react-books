import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
	return (
		<Router>
			<div>
			<nav className="navbar navbar-expand navbar-dark bg-primary">
				<div className="navbar-brand">
					React Books
				</div>
				<div className="navbar-nav">
					<a
					className="nav-item nav-link active"
					href="/"
					>
						Search
					</a>
					<a
					className="nav-item nav-link active"
					href="/saved"
					>
						Saved
					</a>
				</div>
			</nav>
			<Switch>
				<Route exact path="/saved" component={Saved} />
				<Route component={Search} />
			</Switch>
			</div>
		</Router>
	);
}

export default App;
