import React from 'react';
import Login from './pages/login'; // não precisa chamar explicitamente o index
import GlobalStyles from './styles/GlobalStyles'; // todos os componentes react começam com letras maiusculas
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Login />
      <GlobalStyles />
    </>
  );
}

export default App;
