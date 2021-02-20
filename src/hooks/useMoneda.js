import React, { Fragment, useState } from 'react'

const useMoneda = () => {

    // State de nuestro custom hook
    const [state, setState] = useState('');

    const Seleccionar = () => {
        <Fragment>
            <label>Moneda</label>
            <select name="" id="">
                <option value="MXN">Peso mexicano</option>
            </select>
        </Fragment>
    };

    // Retornar state, interfaz y funcion que monfica el state

    return [state, Seleccionar, setState];
}

export default useMoneda
