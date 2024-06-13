import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ContactCard from "../component/ContactCard";

// import { Context } from "../store/appContext";

// import "../../styles/demo.css";

export const Contact = () => {
	// const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="d-flex justify-content-end m-4">
				<Link to="/demo">
					<button className="btn btn-success">Añadir nuevo contacto</button>
				</Link>
			</div>
			<ContactCard />
		</div>
		
	);
};