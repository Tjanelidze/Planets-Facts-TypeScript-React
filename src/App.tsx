import { useState } from 'react';
import { styled, createGlobalStyle } from 'styled-components';
import PLANETS from './assets/data.json';
import HeaderComponent from './components/HeaderComponent';
import ArticleComponents from './components/ArticleComponents';
import { Route, Routes, useParams } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HeaderComponent planets={PLANETS} />}>
          <Route
            path="/:planetName"
            element={<ArticleComponents planets={PLANETS} />}
          />
        </Route>
      </Routes>
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

export default App;
