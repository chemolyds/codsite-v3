import { theme as proTheme } from '@chakra-ui/pro-theme'
import { defaultConfig as baseTheme, createSystem } from '@chakra-ui/react'
import { withProse } from '@nikolovlazar/chakra-ui-prose'

/*
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
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
}*/

const config = {
  theme: {
    tokens: {
      initialColorMode: 'dark',
      useSystemColorMode: true,
      fonts: {
        heading: {
          value: `'RalewayVariable', -apple-system, system-ui, sans-serif`,
        },
        body: { value: `'Nunito', -apple-system, system-ui, sans-serif` },
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

const theme = createSystem(proTheme, config, withProse(proseConfig))
export default theme
