import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import NavBar from './navbar'
import { motion } from 'framer-motion'

export default function Layout({
  children,
  title,
  description,
}: {
  children: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Box maxH="calc(100vh)" overflow="clip">
      <Head>
        <title>{`CODsite | ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Box
        overflowY="auto"
        maxHeight="87vh"
        as={motion.div}
        key={title}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        {title === 'Home' ? (
          <main>{children}</main>
        ) : (
          <Container maxW="container.xl">
            <main>{children}</main>
          </Container>
        )}
      </Box>
    </Box>
  )
}
