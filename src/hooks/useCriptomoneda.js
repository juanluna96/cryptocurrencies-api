import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 30px;
    font-size: 2.4rem;
    display: block;
`;

const Select = styled.select`
    font-family: 'Bebas Neue', cursive;
    font-size: 1.5rem;
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 1px;
    border: none;
`;

const useCriptomoneda = (label, stateInicial, opciones) => {

    // State de nuestro custom hook
    const [state, setState] = useState('');

    const SeleccionarCripto = () => {
        return (
            <Fragment>
                <Label>{ label }</Label>
                <Select name="" id="" onChange={ e => setState(e.target.value) } value={ state }>
                    <option value="">-- Seleccione una divisa --</option>
                    {/* { opciones.map(opcion => (
                        <option key={ opcion.codigo } value={ opcion.codigo }>{ opcion.nombre }</option>
                    )) } */}
                </Select>
            </Fragment>
        )
    };

    // Retornar state, interfaz y funcion que monfica el state

    return [state, SeleccionarCripto, setState];
}

export default useCriptomoneda
