import { computeHeadingLevel } from '@testing-library/react'
import React from 'react'
import { BtnPrimary } from '../BtnPrimary'

export const ObjetosLiterales = () => {

    const persona = {

        nombre: 'Clod',
        apellido: 'Uch',
        edad: 46,
        direccion: {

            calle: 'Cordoba',
            puerta: 1424,
            zip: 1902,
        }
    }

    console.log(persona)

    persona.edad = 35
    
    console.log(persona)

    console.log(persona.direccion.puerta)


    const persona2 = {...persona}

    persona2.nombre = 'Pedro'
    persona2.apellido = 'Res'

    console.log(persona2)
    console.log(persona)

    return (
        <>
            <h2>Objetos Literales</h2>
            <p>
                Los objetos en JavaScript, como en tantos otros lenguajes de programación, se pueden comparar con objetos de la vida real. El concepto de Objetos en JavaScript se puede entender con objetos tangibles de la vida real.
            </p>
            <h6>Temas relacionados</h6>
            <ul>
                <li>Console.table</li>
                <li>Operador Spread</li>
            </ul>

            <BtnPrimary
                url={'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects'}
                targ={'_blanck'}
                btnTxt={' Objetos Literales'}
            />
            <hr />
        </>
    )
}
