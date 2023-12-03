import Layout from '@/components/layout'
import {
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  LinkOverlay,
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title="Competitions" description="CODS Competitions Home">
      <Heading as="h1" textAlign="center" mb="10">
        Competitions
      </Heading>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={8}
      >
        {comps.map(({ id, title, description }) => (
          <GridItem key={id}>
            <Card>
              <CardHeader>
                <Heading size="xs">
                  <LinkOverlay href={`/competitions/${id}`} as={Link}>
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

const comps: { id: string; title: string; description: string }[] = [
  {
    id: 'competitors_guide',
    title: `Competitor's Guide`,
    description: 'All about our competitions!',
  },
  {
    id: 'syllabus',
    title: `Syllabus`,
    description: 'Competition syllabus!',
  },
  {
    id: 'acot',
    title: 'ACOT',
    description: 'Autumn Chemistry Olympiad Tournament',
  },
  {
    id: 'wcc',
    title: 'WCC',
    description: 'Winter Chemistry Competition',
  },
  {
    id: 'socc',
    title: 'SOCC',
    description: 'Spring Open Chemistry Competition',
  },
  {
    id: 'scho',
    title: 'SChO',
    description: 'Summer Chemistry Olympiad',
  },
]
