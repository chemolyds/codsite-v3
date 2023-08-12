import { Box, Container, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import NavBar from './navbar'
import { motion, useReducedMotion } from 'framer-motion'
import Footer from './footer'

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
  const shouldReduceMotion = useReducedMotion()

  return (
    <Box>
      <Head>
        <title>{`CODsite | ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* https://dev.to/shriram27/fixed-navbar-using-chakra-ui-4i7b */}
      <NavBar pos="fixed" w="full" zIndex="200" />
      {/* https://javascript.plainenglish.io/how-to-animate-the-page-transition-in-next-js-68c7b888dce3 */}
      {/* https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs */}
      <Box
        mt={24}
        as={motion.div}
        key={title}
        initial="initial"
        animate="animate"
        variants={
          !shouldReduceMotion
            ? {
                initial: {
                  opacity: 0,
                },
                animate: {
                  opacity: 1,
                },
              }
            : undefined
        }
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
