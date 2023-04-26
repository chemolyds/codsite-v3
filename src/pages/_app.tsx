//import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Exo_2, Nunito, Raleway } from 'next/font/google'
import localFont from 'next/font/local'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/styles/theme'

const exo2 = Exo_2({
	subsets: ['latin'],
	variable: '--font-exo2',
})

const nunito = Nunito({
	subsets: ['latin'],
	variable: '--font-nunito',
})

const opensans_light = localFont({
	src: '../styles/OpenSans-Light.ttf',
	variable: '--font-opensans-light',
})

const raleway = Raleway({
	subsets: ['latin'],
	variable: '--font-raleway',
})

const raleway_black = localFont({
	src: '../styles/Raleway-Black.ttf',
	variable: '--font-raleway-black',
})

const raleway_bold = localFont({
	src: '../styles/Raleway-Bold.ttf',
	variable: '--font-raleway-bold',
})


export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}
