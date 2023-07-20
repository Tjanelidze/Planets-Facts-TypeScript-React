import PLANETS from './assets/data.json';
import HeaderComponent from './components/HeaderComponent';
import ArticleComponents from './components/ArticleComponents';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';

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

export default App;
