import Layout from '@/components/layout'
import { getCompsData } from '@/lib/comps'
import {
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  LinkOverlay,
} from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

export default function Home({
  allCompsData,
}: {
  allCompsData: {
    id: string
    title: string
    description: string
  }[]
}) {
  return (
    <Layout title="SChO" description="Summer Chemistry Olympiad">
      <Heading as="h1" textAlign="center" mb="10">
        Summer Chemistry Olympiad
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        {allCompsData.map(({ id, title, description }) => (
          <GridItem key={id}>
            <Card>
              <CardHeader>
                <Heading size="xs">
                  <LinkOverlay href={`/competitions/scho/${id}`} as={Link}>
                    {title}
                  </LinkOverlay>
                </Heading>
              </CardHeader>
              <CardBody pt="0">{description}</CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allCompsData = await getCompsData('scho')
  return {
    props: {
      allCompsData,
    },
  }
}
