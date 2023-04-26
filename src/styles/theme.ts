import { theme as proTheme } from '@chakra-ui/pro-theme'
import { extendTheme, theme as baseTheme } from '@chakra-ui/react'

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
	colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
}

const theme = extendTheme(config, proTheme)
export default theme