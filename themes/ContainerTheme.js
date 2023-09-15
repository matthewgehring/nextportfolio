
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

// define styles for custom variant
const colorfulVariant = defineStyle((props) => {
  return {
    _light: {
      bg: 'white',
      color: 'green',
    },
    _dark: {
      bg: `gray.700`,
      color: `blue.200`,
    },
  }
})

const boldVariant = defineStyle((props) => {
  return {
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

export default containerTheme;