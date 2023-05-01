import Layout from '@/components/layout'
import { Link } from '@chakra-ui/next-js'
import { Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <Layout title="FAQ" description="Frequently Asked Questions">
      <Heading as="h1" textAlign="center">
        Frequently Asked Questions
      </Heading>
    </Layout>
  )
}
