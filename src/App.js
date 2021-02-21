import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width:900px;
  margin:0 auto;
  @media (min-width: 992px) {
    display:grid;
    grid-template-columns:repeat(2,1fr);
    column-gap:2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
  filter: grayscale(75%);
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color:#fff;
  text-align:700;
  font-weight:700;
  font-size:50px;
  margin-bottom: 20px;
  margin-top: 80px;

  &::after{
    content:'';
    width:250px;
    height:6px;
    background-color: #a3a261;
    display: block;
  }
`;

function App() {

  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {

    const cotizarCriptomoneda = async () => {
      // Evitamos la ejecucion la primera vez
      if (moneda === "") return;

      // Consultar la API para obtener la cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);


      // Mostrar el snipper
      setCargando(true);

      //Ocultar el Spinner y mostrar el resultado
      setTimeout(() => {
        setCargando(false);

        // Guardar cotizacion
        setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      }, 3000);

    }

    cotizarCriptomoneda();

  }, [moneda, criptomoneda]);

  // Mostrar spinner o resultado
  let componente = (cargando == true) ? <Spinner></Spinner> : <Cotizacion resultado={ resultado }></Cotizacion>;

  return (
    <Contenedor>
      <div className="">
        <Imagen src={ imagen } alt="imagen crypto"></Imagen>
      </div>
      <div className="">
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario setMoneda={ setMoneda } setCriptomoneda={ setCriptomoneda }></Formulario>
        { componente }
      </div>
    </Contenedor>
  );
}

export default App;
