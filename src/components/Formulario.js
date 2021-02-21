import React from 'react';
import styled from 'styled-components';

import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'

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

  // Arreglo de monedas/divisas
  const MONEDAS = [
    { codigo: 'USD', nombre: 'Dolar de estados unidos' },
    { codigo: 'MXN', nombre: 'Peso mexicano' },
    { codigo: 'COP', nombre: 'Peso colombiano' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'GBP', nombre: 'Libra exterlina' },
  ]

  // Utilizar use moneda
  const [moneda, SelectMonedas, setState] = useMoneda('Elige tu moneda', '', MONEDAS);

  // Utilizar useCriptomoneda
  const [criptomoneda, SeleccionarCripto] = useCriptomoneda('Elige tu criptomoneda', '');

  return (
    <form action="">
      <SelectMonedas></SelectMonedas>
      <SeleccionarCripto></SeleccionarCripto>
      <Boton type="submit">CALCULAR</Boton>
    </form>
  )
}

export default Formulario
