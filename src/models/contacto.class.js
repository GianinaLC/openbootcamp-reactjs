/* Primer ejercicio */
export class Contacto {
    nombre = '';
    apellido = '';
    email = '';
    sesion = false;

    constructor(nombre, apellido, email, sesion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.sesion = sesion;
    }
}