/* 
*Math.random() genera numeros aleatorios
*Math.floor() genera numeros enteros (redondea hacia abajo al entero más cercano
*Por ejemplo, si necesita seleccionar aleatoriamente de una matriz de 10 elementos, necesitará un número aleatorio entre 0 y 9 inclusive (recuerde que las matrices tienen un índice cero).
   
*check*
    *En este ejercicio tendréis que crear un componente el cual contenga un elemento, puede ser un rectángulo, cuadrado.

    *Las dimensiones del elemento serán de ancho 255px y de alto 255px y su color inicial tiene que ser negro.

    *Dentro del componente crearéis varios métodos de captura del ratón que harán lo siguiente para que el color del elemento cambie:

    *Un método para que cuando el ratón entre en el contenedor, se dará un valor aleatorio (color RGB entre 0 y 255) para cambiar el color del componente.

    *Un método para que cuando salga el ratón del componente se detenga por completo el cambio de color.

   *Por último, un método en el que cuando se pulsa dos veces en el componente, se tiene que detener el cambio de color. 
 */


import { useState } from "react"

const SesionDoce = () => {
    const [colorInicial, setColorInicial] = useState('#000');
    const [manejoSetInterval, setManejoSetInterval] = useState(0)

    const getColor = () => Math.floor(Math.random()*256)

    /*toString(16) Convierte el valor del entero de 16 bits con signo especificado en su representación de cadena equivalente, usando la información de formato específica de la referencia cultural indicada.
 */
    const getHex = (red, green, blue) => {
        return (
            '#' + [red,green,blue].map((c) => {
          const hex = c.toString(16);
          return hex.lenght === 1 ? '0' + hex : hex;
        })//#0,22b,de
        .join('')//#022bde
        )
        
    }

    const generadorHex = () => {
        const rgb = {
            r:getColor(),
            g:getColor(),
            b:getColor(),
        }
        return setColorInicial(getHex(rgb.r, rgb.g, rgb.b))
    }

    const mouseIn = () => {
       return setManejoSetInterval(setInterval(generadorHex, 500))
    }

    const mouseOut = () => {
        return clearInterval(manejoSetInterval)
    }

    const mouseDoubleClick = () => {
        return clearInterval(manejoSetInterval)
    }
    return (
        <div>
            <div
                style={{ backgroundColor: colorInicial, width: '255px', height: '255px' }}
                onMouseOver={mouseIn}
                onMouseLeave={ mouseOut }
                onDoubleClick={ mouseDoubleClick}
            >

            </div>
        </div>
    )
}

export default SesionDoce