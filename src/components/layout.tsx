import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Footer from './footer'
import NavBar from './navbar'

export default function Layout({
  children,
  title,
  description,
  maxW = 'container.xl',
}: {
  children: React.ReactNode
  title: string
  description: string
  maxW?: string
}) {
  return (
    <Box>
      <Head>
        <title>{`CODsite | ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* https://dev.to/shriram27/fixed-navbar-using-chakra-ui-4i7b */}
      <NavBar pos="fixed" w="full" zIndex="200" mt="0" />
      {/* https://javascript.plainenglish.io/how-to-animate-the-page-transition-in-next-js-68c7b888dce3 */}
      {/* https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs */}
      <Box
        pt={24}
        key={title}
        data-state="open"
        _open={{
          animationName: 'fade-in, scale-in',
          animationDuration: '300ms',
        }}
      >
        {title === 'Home' ? (
          <main>{children}</main>
        ) : (
          <Container maxW={maxW}>
            <main>{children}</main>
          </Container>
        )}
      </Box>
      <Footer mt={10} w="full" />
    </Box>
  )
}
