import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const { actions } = useContext(Context);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.addContact({ name, email, phone, address });
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
    };

    return (
        <div className="container">
            <h1 className="text-center">Añadir nuevo contacto</h1>
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
                    <button type="submit" className="btn btn-primary">Guardar</button>
                    <Link to="/" className="btn btn-secondary ms-2">Cancelar</Link>
                </div>
            </form>
        </div>
    );
};