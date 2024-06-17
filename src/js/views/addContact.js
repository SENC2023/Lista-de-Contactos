import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import "../../styles/addContact.css";

export const AddContact = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	useEffect(() => {
		if (id) {
			const contact = store.contacts.find(contact => contact.id === parseInt(id));
			if (contact) {
				setName(contact.name);
				setEmail(contact.email);
				setPhone(contact.phone);
				setAddress(contact.address);
			}
		}
	}, [id, store.contacts]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newContact = { name, email, phone, address };
		if (id) {
			actions.updateContact(parseInt(id), newContact);
		} else {
			actions.addContact(newContact);
		}
		setName("");
		setEmail("");
		setPhone("");
		setAddress("");
	};

	return (
		<div className="container">
			<h1 className="text-center">{id ? "Editar contacto" : "Añadir nuevo contacto"}</h1>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="exampleInputName" className="form-label">Nombre completo</label>
					<input type="text" className="form-control" id="exampleInputName" placeholder="Nombre completo" value={name} onChange={(e) => setName(e.target.value)} />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail" className="form-label">Email</label>
					<input type="email" className="form-control" id="exampleInputEmail" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPhone" className="form-label">Teléfono</label>
					<input type="tel" className="form-control" id="exampleInputPhone" placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputAddress" className="form-label">Dirección</label>
					<input type="text" className="form-control" id="exampleInputAddress" placeholder="Dirección" value={address} onChange={(e) => setAddress(e.target.value)} />
				</div>
				<div>
					<button type="submit" className="BackContact btn btn-primary">Guardar</button>
					<Link to="/" className="ms-2">o volver a contactos</Link>
				</div>
			</form>
		</div>
	);
};