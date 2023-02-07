/* Primer ejercicio */
import React, { useState, useEffect } from "react";
import { Contacto } from '../../models/contacto.class'
import ContactoComponente from "../pure/contacto";
import ContactoForm from "../pure/forms/contactoForm";

const ContactoLista = () => {

    const ejemploContacto = new Contacto('Ana', 'Lopez', '123@gmail.com', false);
    const ejemploContacto2 = new Contacto('Maria', 'Agua', 'asdf3@gmail.com', true);
    
    /* estado del contacto */
    const [contactos, setContactos] = useState([ejemploContacto, ejemploContacto2])

    const [loading, setLoading] = useState(true)

//control del ciclo de vida del componente
    useEffect(() => {
        console.log('modificacion de tareas')
        setLoading(false)
        //cuando desaparezca el componente sale lo que hay en return
        return () => {
              console.log('se va a desmontar')
        }
    },[contactos])

    function isConectado(estado) {
        console.log('conectividad', estado);
        const index = contactos.indexOf(estado);
        const listaTemporal = [...contactos];
        listaTemporal[index].sesion = !listaTemporal[index].sesion;

        setContactos(listaTemporal)
    }

    function borrarContacto(estado) {
        console.log('borrado contacto', estado);
        const index = contactos.indexOf(estado);
        const listaTemporal = [...contactos]
        listaTemporal.splice(index, 1);
        setContactos(listaTemporal)
    }

    function agregarContacto(estado) {
        console.log('Add this task:', estado);
        const index = contactos.indexOf(estado);
        const listaTemporal = [...contactos];
        listaTemporal.push(estado);
        setContactos(listaTemporal);
    }


    return (
        <div>
            <div className="col-12">
                <div className="card">
                    <div className="card-header p-3">
                        <h5>Los contactos son:</h5>
                    </div>
                    <div className="card-body" data-mdb-perfect-scrollbar='true' style={{ position:'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Conectado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contactos.map((contacto, index) => {
                                    return (
                                        <ContactoComponente
                                            key={index}
                                            contacto={contacto}
                                            conectado={isConectado}
                                            remove={borrarContacto}></ContactoComponente>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactoForm add={agregarContacto}></ContactoForm>
        </div>
    )
}

export default ContactoLista;