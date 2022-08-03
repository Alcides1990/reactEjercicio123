import React from "react";
import PropTypes from 'prop-types';
import {ContactoModel} from '../../Models/ContactoModel';
const ContactoPure = ({contacto})=>{
    return (
        <div>
            <h1>
                Name:{contacto.name}
            </h1>
            <h2>
                Lasname: {contacto.lasname}
            </h2>
            <h3>
                Email: {contacto.email}
            </h3>
            <h4>
                Connection: {contacto.connection ? 'Contacto en linea':'Contacto no disponible'}
            </h4>
        </div>

    );
}
ContactoPure.propTypes= {
    contacto: PropTypes.instanceOf(ContactoModel)
}

export default ContactoPure;