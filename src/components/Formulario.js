import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'
import Error from './Error';

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

const Formulario = ({ setMoneda, setCriptomoneda }) => {
  // State del listado de criptomoneda
  const [listacripto, setListacripto] = useState([]);

  // State de error
  const [error, setError] = useState(false)

  // Arreglo de monedas/divisas
  const MONEDAS = [
    { codigo: 'USD', nombre: 'Dolar de estados unidos' },
    { codigo: 'COP', nombre: 'Peso colombiano' },
    { codigo: 'MXN', nombre: 'Peso mexicano' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'GBP', nombre: 'Libra exterlina' },
  ]

  // Utilizar use moneda
  const [moneda, SelectMonedas, setState] = useMoneda('Elige tu moneda', '', MONEDAS);

  // Utilizar useCriptomoneda
  const [criptomoneda, SeleccionarCripto] = useCriptomoneda('Elige tu criptomoneda', '', listacripto);

  // Ejecutar llamado a la api
  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

      const resultado = await axios.get(url);

      setListacripto(resultado.data.Data);
    }
    consultarAPI();
  }, []);


  // Cuando el usuario hace submit
  const cotizarMoneda = (e) => {
    e.preventDefault();

    // Validar si ambos campos estan llenos
    if (moneda === "" || criptomoneda === "") {
      setError(true);
      return;
    }

    // Pasar los datos al componente principal
    setError(false);
    setMoneda(moneda);
    setCriptomoneda(criptomoneda);
  }

  return (
    <form onSubmit={ cotizarMoneda }>
      {error ? <Error mensaje='Todos los campos son obligatorios'></Error> : null }
      <SelectMonedas></SelectMonedas>
      <SeleccionarCripto></SeleccionarCripto>
      <Boton type="submit">CALCULAR</Boton>
    </form>
  )
}

export default Formulario
