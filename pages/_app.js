import '../styles/global.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import containerTheme from '../themes/ContainerTheme';

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