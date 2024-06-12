import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light m-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">4Geeks Academy</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-success">Añadir nuevo contacto</button>
				</Link>
			</div>
		</nav>
	);
};
