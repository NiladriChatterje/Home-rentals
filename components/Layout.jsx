import Head from 'next/head';
import { Box , Image } from '@chakra-ui/react';

import Footer from './Footer';
import Navbar from './Navbar';
// import backg from '../assets/images/vector.png';

export default function Layout({ children }) {
  return (
    <Box>
      <Head>
        <title>rENTS-&-sALES</title>
      </Head>
      <header>
          <Navbar />
        </header>
      <Box maxWidth='1450px' m='auto'>
        <Box>{children}</Box>
      </Box>
      <footer>
          <Footer />
        </footer>
    </Box>
  );
}
