import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import "../../styles/addContact.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{/* <button className="btn btn-success">Añadir nuevo contacto</button> */}
			<h1 className="text-center">Añadir nuevo contacto</h1>
			<form>
				<div className="mb-3">
					<label for="exampleInputFullName" className="form-label">Nombre completo</label>
					<input type="text" className="form-control" id="exampleInputFullName" placeholder="Nombre completo"/>
				</div>
				<div className="mb-3">
					<label for="exampleInputEmail" className="form-label">Email</label>
					<input type="email" className="form-control" id="exampleInputEmail" placeholder="Email"/>
				</div>
				<div className="mb-3">
					<label for="exampleInputPhone" className="form-label">Teléfono</label>
					<input type="number" className="form-control" id="exampleInputPhone" placeholder="Teléfono"/>
				</div>
				<div className="mb-3">
					<label for="exampleInputAddress" className="form-label">Dirección</label>
					<input type="text" className="form-control" id="exampleInputAddress" placeholder="Dirección"/>
				</div>
                <div className="">
                    <button type="submit" className="BackContact btn btn-primary d-flex justify-content-center m-1">Guardar</button>
                    <Link to="/">
                    <p className="m-1">o volver a contactos</p>
                    </Link>
                </div>
			</form>
		</div>
	);
};

{/* <ul className="list-group">
	{store.demo.map((item, index) => {
		return (
			<li
				key={index}
				className="list-group-item d-flex justify-content-between"
				style={{ background: item.background }}>
				<Link to={"/single/" + index}>
					<span>Link to: {item.title}</span>
				</Link>
				{// Conditional render example
				// Check to see if the background is orange, if so, display the message
				item.background === "orange" ? (
					<p style={{ color: item.initial }}>
						Check store/flux.js scroll to the actions to see the code
					</p>
				) : null}
				<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
					Change Color
				</button>
			</li>
		);
	})}
</ul>
<br /> */}