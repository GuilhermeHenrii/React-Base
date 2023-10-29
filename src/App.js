import React from 'react';
import Login from './pages/login'; // não precisa chamar explicitamente o index
import GlobalStyles from './styles/GlobalStyles'; // todos os componentes react começam com letras maiusculas

function App() {
  return (
    <>
      <Login />
      <GlobalStyles />
    </>
  );
}

export default App;
