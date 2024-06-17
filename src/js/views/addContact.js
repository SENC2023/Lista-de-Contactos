import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom"; // Importar useParams
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import "../../styles/addContact.css";

export const AddContact = () => {
	const { id } = useParams(); // Obtener el id del contacto de la URL
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	// Obtener los datos del contacto si se está editando
	useEffect(() => {
		if (id) {
			const contact = store.contacts.find(contact => contact.id === parseInt(id));
			if (contact) {
				setFullName(contact.name);
				setEmail(contact.email);
				setPhone(contact.phone);
				setAddress(contact.address);
			}
		}
	}, [id, store.contacts]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newContact = { full_name: fullName, email, phone, address };
		if (id) {
			actions.updateContact(parseInt(id), newContact); // Actualizar el contacto si hay un id
		} else {
			actions.addContact(newContact); // Agregar el contacto si no hay id
		}
		setFullName("");
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
					<input type="text" className="form-control" id="exampleInputName" placeholder="Nombre completo" value={fullName} onChange={(e) => setFullName(e.target.value)} />
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
					<button type="submit" className="btn btn-primary">Guardar</button>
					<Link to="/" className="btn btn-secondary ms-2">Cancelar</Link>
				</div>
			</form>
		</div>
	);
};