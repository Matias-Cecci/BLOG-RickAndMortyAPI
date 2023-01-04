import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<img src="https://imgs.search.brave.com/UcA5lKRo5ZtYTZjCm55hQLA9IpZCsM9mDJrcdMCZ-vU/rs:fit:340:270:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2xvdWQtYm94/bG9qYS5jb20vbG9q/YXMvd3lmeWcvcHJv/ZHV0b3MvYjRmNTdi/MDAtZGU0ZS00OWQy/LWEwOTEtODUwNzhh/OTJkZjZjLmpwZw" alt="RickAndMorty" width="50" height="40"/>
				</Link>
				<div className="dropdown ml-auto">
					<Link to="/">
						<div className="btn-group" role="group">
							<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites  {store.favorites.length}
							</button>
							<ul className="dropdown-menu dropdown-menu-end">
								{store.favorites.length > 0 ? 
									store.favorites.map((favorite, i) =>{
										return <li key={i} className="dropdown-item d-flex justify-content-around">
											{favorite} 
												<p onClick={() => actions.setFavorites(favorite)}>
													<i class="fa-solid fa-trash"></i>
												</p>
											</li>
										}) : <li className="dropdown-item">EMPTY</li>}
							</ul>
						</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};
