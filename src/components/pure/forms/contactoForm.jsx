import { useRef } from "react"
import { Contacto } from "../../../models/contacto.class"
import PropTypes from 'prop-types'

const ContactoForm = ({ add }) => {
    const nombreRef = useRef('')
    const apellidoRef = useRef('')
    const emailRef = useRef('')

    function agregarContacto(e) {
        e.preventDefault();
        const nuevoContacto = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            false
        )
        /* add esta en el padre -contactos_list*/
        add(nuevoContacto);
    }

    return (
        <form onSubmit={agregarContacto} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nombreRef} id='inputNombre' className='form-control form-control-lg' required autoFocus placeholder="Nombre del contacto" />

                <input ref={apellidoRef} id='inputApellido' className='form-control form-control-lg' required placeholder="Apellido" />
                
                <input ref={emailRef} id='inputEmail' className='form-control form-control-lg' required  placeholder="Email" />
            </div>
            <button type="submit" className='btn btn-success btn-lg ms-2' >Agregar</button>
        </form>
    )
}

ContactoForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactoForm;