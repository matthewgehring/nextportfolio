import '../styles/global.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

// define styles for custom variant
const colorfulVariant = defineStyle((props) => {
  const { colorScheme: c } = props // add color scheme as a prop
  return {
    _light: {
      bg: `${c}.200`,
      color: `${c}.800`,
    },
    _dark: {
      bg: `${c}.700`,
      color: `${c}.200`,
    },
  }
})

const boldVariant = defineStyle((props) => {
  return {
    borderRadius: 'none',
    border: '2px solid',
    fontFamily: 'mono',
    _light: {
      bg: 'white',
      color: `black`,
    },
    _dark: {
      bg: 'black',
      color: 'white',
    },
  }
})

// define custom variants
const variants = {
  colorful: colorfulVariant,
  bold: boldVariant,
}

const containerTheme = defineStyleConfig({
  variants
});

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: ""
      }
    }
    ),
  },
    colors: {
      brand: {
        50: '#dafff3',
        100: '#adffe2',
        200: '#7dfed5',
        300: '#4efeca',
        400: '#25fec3',
        500: '#13e4b1',
        600: '#01b18f',
        700: '#007f5d',
        800: '#004d32',
        900: '#001b0e',
      },
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