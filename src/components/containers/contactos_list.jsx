/* Primer ejercicio */
import React from "react";
import { Contacto } from '../../models/contacto.class'
import ContactoComponente from "../pure/contacto";

const ContactoLista = () => {

    const ejemploContacto = new Contacto('Ana Maria', 'Lopez', '123@gmail.com',false);

    return (
        <div>
            <div>
                <h1>Contactos:</h1>
            </div>
            {/* TODO aplicar un for/map para renderizar una lista */}
            <ContactoComponente contacto={ejemploContacto}></ContactoComponente>

        </div>
    )
}

export default ContactoLista;