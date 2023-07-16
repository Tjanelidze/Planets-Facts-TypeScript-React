import { useState } from 'react';
import { styled, createGlobalStyle } from 'styled-components';
import PLANETS from './assets/data.json';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent planets={PLANETS} />

      <article>
        {PLANETS.map(() => {
          return (
            <Container>
              <PlanetImg></PlanetImg>
              <h1>Hello</h1>
            </Container>
          );
        })}
      </article>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: url('assets/background-stars.svg');
    background-size: cover;
    background-color: #11112B;
    color: #fff;
    min-height: 100vh;
    font-family: 'Antonio', sans-serif;
  }
`;

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  margin-top: 12.6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const PlanetImg = styled.div`
  background: url(assets/planet-mercury.svg);
  background-repeat: no-repeat;
`;

export default App;
