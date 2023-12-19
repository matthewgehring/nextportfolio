import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import containerTheme from '../themes/ContainerTheme';
import '../styles/global.css'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: ""
      }
    }
    ),
  },
    components: {
      Container: containerTheme,
    },
    
  });

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider> 
  )
}