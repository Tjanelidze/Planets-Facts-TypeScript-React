import { useState } from 'react';
import { styled, createGlobalStyle } from 'styled-components';
import PLANETS from './assets/data.json';

function App() {
  return (
    <>
      <GlobalStyle />

      <Header>
        <MainTitle>The Planets</MainTitle>
        <nav>
          <NavLinks>
            {PLANETS.map((planet) => {
              return <li>{planet.name}</li>;
            })}
          </NavLinks>
        </nav>
      </Header>
    </>
  );
}

const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`
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
    min-height: 100vh;
    font-family: 'Antonio', sans-serif;
  }
`;

const MainTitle = styled.h1`
  color: #fff;
  font-size: 2.8rem;
  font-weight: 400;
  letter-spacing: -1.05px;
  text-transform: uppercase;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: center;
  border-bottom: 1px solid #ffffff22;
  padding: 2.2rem 4.1rem 2.7rem 3.2rem;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 3.3rem;
  list-style: none;
  color: #ffffffbe;
  font-family: 'League Spartan', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export default App;
