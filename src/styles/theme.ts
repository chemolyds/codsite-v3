import { defaultConfig as baseTheme, createSystem } from '@chakra-ui/react'

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

const theme = createSystem(baseTheme, config)
export default theme
