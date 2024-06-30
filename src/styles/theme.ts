import { theme as proTheme } from '@chakra-ui/pro-theme'
import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
import { withProse } from '@nikolovlazar/chakra-ui-prose'
import { components } from 'chakra-react-select'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  colors: { 
    ...baseTheme.colors, brand: baseTheme.colors.blue, bronze: '#CD7F32' },
  fonts: {
    heading: `'RalewayVariable', -apple-system, system-ui, sans-serif`,
    body: `'Nunito', -apple-system, system-ui, sans-serif`,
  },
  textStyles: {
    h2: {
      fontFamily: 'var(--chakra-fonts-heading)',
      fontWeight: '700',
    },
    h3: {
      fontFamily: 'var(--chakra-fonts-heading)',
      fontWeight: '400',
    },
    p: {
      fontFamily: 'var(--chakra-fonts-body)',
    },
    a: {
      color: 'blue.400',
    },
  },
  components: {
    Badge: {
      baseStyle: {
        bg: 'gray.200',
        color: 'black',
      },
      variants: {
        bronze: {
          bg: 'bronze',
          color: 'white',
        },
        silver: {
          bg: 'silver',
          color: 'black',
        },
        gold: {
          bg: 'gold',
          color: 'black',
        },
      },
    },
  },
}

const proseConfig = {
  baseStyle: {
    a: {
      color: 'blue.400',
    },
  },
}

const theme = extendTheme(proTheme, config, withProse(proseConfig))
export default theme
