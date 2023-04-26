import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/styles/theme'

//import '@fontsource/exo-2/400.css'
import '@fontsource/nunito/400.css'
//import '@fontsource/open-sans/700.css'
import '@fontsource/raleway/variable.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
