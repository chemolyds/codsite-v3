import Layout from '@/components/layout'
import Link from 'next/link'
import {
  Heading,
  UnorderedList,
  ListItem,
  Grid,
  GridItem,
  Card,
  CardHeader,
  LinkOverlay,
  CardBody,
} from '@chakra-ui/react'
import { getFaqsData } from '@/lib/faqs'
import { GetStaticProps } from 'next'

export default function Home({
  allFaqsData,
}: {
  allFaqsData: {
    id: string
    title: string
  }[]
}) {
  return (
    <Layout title="FAQ" description="Frequently Asked Questions">
      <Heading as="h1" textAlign="center">
        Frequently Asked Questions
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {allFaqsData.map(({ id, title, excerpt }) => (
          <GridItem key={id}>
            <Card>
              <CardHeader>
                <Heading size="xs">
                  <LinkOverlay href={`/faq/${id}`} as={Link}>
                    {title}
                  </LinkOverlay>
                </Heading>
                <CardBody>{excerpt}</CardBody>
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
