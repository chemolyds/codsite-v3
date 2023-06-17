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
    <Layout title="SOCC" description="Spring Open Chemistry Competition">
      <Heading as="h1" textAlign="center" mb="10">
        Spring Open Chemistry Competition
      </Heading>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={8}
      >
        {allCompsData.map(({ id, title, description }) => (
          <GridItem key={id}>
            <Card>
              <CardHeader>
                <Heading size="xs">
                  <LinkOverlay href={`/competitions/socc/${id}`} as={Link}>
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
  const allCompsData = await getCompsData('socc')
  return {
    props: {
      allCompsData,
    },
  }
}
