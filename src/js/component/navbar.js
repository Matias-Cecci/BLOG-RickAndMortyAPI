import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {

	const { store, actions } = useContext(Context);


	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<img src="https://imgs.search.brave.com/UcA5lKRo5ZtYTZjCm55hQLA9IpZCsM9mDJrcdMCZ-vU/rs:fit:340:270:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2xvdWQtYm94/bG9qYS5jb20vbG9q/YXMvd3lmeWcvcHJv/ZHV0b3MvYjRmNTdi/MDAtZGU0ZS00OWQy/LWEwOTEtODUwNzhh/OTJkZjZjLmpwZw" alt="RickAndMorty" width="30" height="24"/>
				</Link>
				<div className="dropdown ml-auto">
					<Link to="/">
						<div className="btn-group" role="group">
							<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites  {store.favorites.length}
							</button>
							<ul className="dropdown-menu">
								<li>
									{store.favorites ? (
										store.favorites.map((elem, i) => (
									<div className="dropdown-item d-flex justify-content-around" key={i} id={++i} title={elem.item}>
										{elem.item}
										<div id={i} onClick={() => actions.removeFavorites(i)}>
											<i className="fa-regular fa-circle-xmark"></i>
										</div>
									</div>
										))
									) : (
										<span>(...)</span>
									)}
								</li>
							</ul>
						</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};
