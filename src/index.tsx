import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { MyForm } from './MyForm';

function App() {
  return (
    <ChakraProvider>
      <MyForm />
    </ChakraProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
