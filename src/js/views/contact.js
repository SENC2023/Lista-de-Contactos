import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContactCard from "../component/ContactCard";
import { Context } from "../store/appContext";

export const Contact = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <div className="d-flex justify-content-end m-4">
                <Link to="/add">
                    <button className="btn btn-success">Añadir nuevo contacto</button>
                </Link>
            </div>
            <div className="container">
                <div className="row">
                    {store.contacts.map(contact => (
                        <div className="col-md-12" key={contact.id}>
                            <ContactCard contact={contact} deleteContact={actions.deleteContact} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};