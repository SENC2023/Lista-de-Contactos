import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/ContactCard.css";

export const ContactCard = () => {
	return (
		<div className="ContactCard">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-3">
                    <img src="https://loremflickr.com/640/360" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">Nombre completo</h5>
                        <p className="card-text">Dirección</p>
                        <p className="card-text">Teléfono</p>
                        <p className="card-text">Email</p>
                    </div>
                    </div>
                    <div className="d-flex justify-content-evenly col-md-3 mt-4">
                        <i class="fa-solid fa-pen"></i>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>  
        </div>
	);
};

export default ContactCard;     