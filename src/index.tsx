import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './Context/ProdutoContext';
import { ChakraProvider } from '@chakra-ui/react'
ReactDOM.render(
  <React.StrictMode>
    <Context>
      <ChakraProvider >
        <App />
      </ChakraProvider>
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);

