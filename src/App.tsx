import PLANETS from './assets/data.json';
import HeaderComponent from './components/HeaderComponent';
import ArticleComponents from './components/ArticleComponents';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import { useState } from 'react';
import HomeComponent from './components/HomeComponent';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GlobalStyle />
      <HeaderComponent planets={PLANETS} open={open} setOpen={setOpen} />
      <Routes>
        <Route
          path="/"
          element={
            <HomeComponent planets={PLANETS} open={open} setOpen={setOpen} />
          }
        />
        <Route
          path="/:planetName"
          element={
            <ArticleComponents
              planets={PLANETS}
              open={open}
              setOpen={setOpen}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
