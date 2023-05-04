import Layout from '@/components/layout'
import { getFaqsData } from '@/lib/faqs'
import {
  Card,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  LinkOverlay,
} from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

export default function Home({
  allFaqsData,
}: {
  allFaqsData: {
    id: string
    title: string
    excerpt: string
  }[]
}) {
  return (
    <Layout title="FAQ" description="Frequently Asked Questions">
      <Heading as="h1" textAlign="center" mb="10">
        Frequently Asked Questions
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        {allFaqsData.map(({ id, title, excerpt }) => (
          <GridItem key={id}>
            <Card>
              <CardHeader>
                <Heading size="xs">
                  <LinkOverlay href={`/faq/${id}`} as={Link}>
                    {title}
                  </LinkOverlay>
                </Heading>
              </CardHeader>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allFaqsData = await getFaqsData()
  return {
    props: {
      allFaqsData,
    },
  }
}
