import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<img src="https://imgs.search.brave.com/UcA5lKRo5ZtYTZjCm55hQLA9IpZCsM9mDJrcdMCZ-vU/rs:fit:340:270:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2xvdWQtYm94/bG9qYS5jb20vbG9q/YXMvd3lmeWcvcHJv/ZHV0b3MvYjRmNTdi/MDAtZGU0ZS00OWQy/LWEwOTEtODUwNzhh/OTJkZjZjLmpwZw" alt="RickAndMorty" width="30" height="24"/>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Favorites []</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
