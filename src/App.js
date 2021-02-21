import React from 'react';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';

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
  return (
    <Contenedor>
      <div className="">
        <Imagen src={ imagen } alt="imagen crypto"></Imagen>
      </div>
      <div className="">
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario></Formulario>
      </div>
    </Contenedor>
  );
}

export default App;
