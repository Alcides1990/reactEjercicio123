import React from "react";
import { ContactoModel } from "../../Models/ContactoModel";
import ContactoPure from '../pure/ContactoPure';
const ContactoComponent=()=>{
    const contacto= new ContactoModel('Alcides','Noguera','@gmail.com',true);
    return (
        <div>
            <div>Your contacto</div>
            <ContactoPure contacto={contacto}/>
        </div>
    );
}
export default ContactoComponent;