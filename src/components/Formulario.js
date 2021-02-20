import React from 'react';
import styled from 'styled-components';

import useMoneda from '../hooks/useMoneda'

const Boton = styled.button`
  margin-top: 20px;
  font-weight: bold;
  font-size:20px;
  padding: 10px;
  background-color: #CAB797;
  border:none;
  width: 100%;
  border-radius: 10px;
  color: #FFFFFF;
  transition: background-color 0.5s ease;

  &:hover{
    background-color: #978a72;
    cursor: pointer;
  }
`;

const Formulario = () => {

    // Utilizar use moneda
    const [moneda, SelectMonedas, setState] = useMoneda();

    return (
        <form action="">
            <Boton type="submit">CALCULAR</Boton>
        </form>
    )
}

export default Formulario
