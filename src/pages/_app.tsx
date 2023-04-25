import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Exo_2, Nunito, Raleway } from 'next/font/google'
import localFont from 'next/font/local'
import { ChakraProvider } from '@chakra-ui/react'

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
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	)

  return (
		<div className={`${exo2.variable} ${nunito.variable} ${opensans_light.variable} ${raleway.variable} ${raleway_black.variable} ${raleway_bold.variable} font-sans`}>
			<Component {...pageProps} />
		</div>
	)
}
