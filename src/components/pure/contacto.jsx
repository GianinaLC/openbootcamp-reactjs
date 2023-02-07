/* Primer ejercicio */
import { useEffect } from "react";
import { Contacto } from "../../models/contacto.class";
import PropTypes from 'prop-types';

const ContactoComponente = ({ contacto, conectado , remove }) => {

    useEffect(() => {
        console.log('contacto creada')
        return () => {
            console.log(`contacto: ${contacto.nombre} se va a desmontar`)
        }
    }, [contacto])
    
        function conectadoIcon() {
            if (contacto.sesion) {
                return(<i onClick={() => conectado(contacto)} className="bi-toggle-on task-action" style={{color: 'green'}}></i>) 
            } else {
                return(<i onClick={() => conectado(contacto)}  className="bi-toggle-off task-action" style={{color: 'grey'}}></i>) 
            }
        }



    return (
            <tr className="fw-normal">
                <th>
                    <span className="ms-2">{ contacto.nombre }</span>
                </th>
                <td  className="align-middle">
                    <span> { contacto.apellido }</span>
                </td>
                <td className="align-middle">
                    <span>{contacto.email} </span>
                </td>
                <td className="align-middle">
                    {conectadoIcon()}

                    <i className="bi-trash task-action"
                        style={{ color: 'tomato', fontSize: '20px' }}
                        onClick={() => remove(contacto)}></i>
                </td>
            </tr>
    )

}

ContactoComponente.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
    conectado: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}


export default ContactoComponente