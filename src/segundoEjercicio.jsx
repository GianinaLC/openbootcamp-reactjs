/* pasar el componente class dado a uno funcional */

import React from "react";
import { useState } from "react";

export const Clock = () => {

    const estadoInicial = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martin',
        apellido: 'SJ'
    }

    const [dia, setDia] = useState(estadoInicial)

    return (
        <div>

        </div>
    )
}

export const DidmountHook = () => {
    useEffect(() => {
        console.log('comportamiento antes de que el componente sea aniadido al dom (renderice)')
    }, [])
    //el corchete hace que se ejecute solo una vez

    return (
        <div>
            <h1>DidmountHook</h1>
        </div>
    )
}