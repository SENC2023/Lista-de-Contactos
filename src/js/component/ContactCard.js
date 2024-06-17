import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/ContactCard.css";

const ContactCard = ({ contact, deleteContact }) => {
    const handleDelete = () => {
        deleteContact(contact.id);
    };

    return (
        <div className="ContactCard">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src="https://loremflickr.com/640/360" className="img-fluid rounded-start" alt="Imagen de muestra"/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{contact.name}</h5>
                            <p className="card-text">{contact.address}</p>
                            <p className="card-text">{contact.phone}</p>
                            <p className="card-text">{contact.email}</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly col-md-3 mt-4">
                        <Link to={`/edit/${contact.id}`}>
                            <i className="fa-solid fa-pen"></i>
                        </Link>
                        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
                    </div>
                </div>
            </div>  
        </div>
    );
};

ContactCard.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired
};

export default ContactCard;