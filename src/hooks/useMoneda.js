import React, { Fragment, useState } from 'react'

const useMoneda = (label, stateInicial, opciones) => {

    // State de nuestro custom hook
    const [state, setState] = useState('');

    const Seleccionar = () => {
        return (
            <Fragment>
                <label>{ label }</label>
                <select name="" id="" onChange={ e => setState(e.target.value) } value={ state }>
                    <option value="">-- Seleccione una divisa --</option>
                    { opciones.map(opcion => (
                        <option key={ opcion.codigo } value={ opcion.codigo }>{ opcion.nombre }</option>
                    )) }
                </select>
            </Fragment>
        )
    };

    // Retornar state, interfaz y funcion que monfica el state

    return [state, Seleccionar, setState];
}

export default useMoneda
