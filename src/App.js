import React from 'react';
import { ChakraProvider, VStack, Text, Link } from '@chakra-ui/react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link as ReachLink,
} from 'react-router-dom';

import './style.css';
import { myTheme } from './Theme/myTheme';
import LandingPage from './Routes/LandingPage';
import Verification from './Routes/Verification';
import Deals from './Routes/Deals.jsx';
import McDelivery from './Routes/McDelivery.jsx';

const NotFound = () => {
  return (
    <VStack
      w={'100%'}
      h={'100vh'}
      fontWeight={'bold'}
      spacing={null}
      justifyContent={'center'}
      textAlign={'center'}
      zIndex={99}
    >
      <Text fontSize={'64px'}>404</Text>
      <Text fontSize={'64px'}>PAGE NOT FOUND</Text>
      <Link
        as={ReachLink}
        to={'/'}
        fontSize={'24px'}
        color={'yellow'}
        textDecoration={'underline'}
      >
        Back to Landing Page
      </Link>
    </VStack>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={myTheme}>
        <Routes>
          <Route path={'/'} element={<LandingPage />} />
          <Route path={'/verification'} element={<Verification />} />
          <Route path={'/deals'} element={<Deals />} />
          <Route path={'/mcdelivery'} element={<McDelivery />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
