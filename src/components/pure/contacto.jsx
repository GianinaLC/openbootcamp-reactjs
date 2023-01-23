/* Primer ejercicio */
import { Contacto } from "../../models/contacto.class";
import PropTypes from 'prop-types';

const ContactoComponente = ({ contacto }) => {
    return (
        <div>
            <h2>
                Nombre: { contacto.nombre }
            </h2>
            <h3>
                Apellido: {contacto.apellido}
            </h3>
            <h4>
                email: {contacto.email}
            </h4>
            <h5>
                Se encuentra: { contacto.conectado ? 'Conectado' : 'No conectado'}
            </h5>
        </div>
    )

}

ContactoComponente.propTypes = {
    contacto : PropTypes.instanceOf(Contacto)
}


export default ContactoComponente