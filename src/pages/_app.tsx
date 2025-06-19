import type { AppProps } from 'next/app'

//import '@fontsource/exo-2/400.css'
import '@fontsource/nunito/400.css'
//import '@fontsource/open-sans/700.css'
import { Provider } from '@/components/ui/provider'
import '@fontsource/raleway/variable.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}
