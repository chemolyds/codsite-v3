import Layout from '@/components/layout'
import { NextLink } from '@/components/ui/NextLink'
import { getCountryGuidesData } from '@/lib/countryGuides'
import {
  Card,
  Grid,
  GridItem,
  Heading,
  LinkOverlay,
  Table,
} from '@chakra-ui/react'
import { GetStaticProps } from 'next'
export default function Home({
  allCountryGuidesData,
}: {
  allCountryGuidesData: {
    id: string
    title: string
    description: string
    order: number
  }[]
}) {
  return (
    <Layout title="Guides" description="List of Guides and common resources">
      <Heading as="h1" textAlign="center" mb="100" size="4xl">
        Guides
      </Heading>
      {/* Generic Guides */}
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={8}
        mt="10"
      >
        {guides.map((guide) => (
          <GridItem key={guide.href}>
            <Card.Root>
              <Card.Header>
                <Heading size="lg" pb="2">
                  <LinkOverlay href={`/guides/${guide.href}`}>
                    {guide.title}
                  </LinkOverlay>
                </Heading>
              </Card.Header>
              <Card.Body pt="0">{guide.description}</Card.Body>
            </Card.Root>
          </GridItem>
        ))}
      </Grid>
      {/* Country Information */}
      <Heading as="h1" textAlign="center" my="10" size="4xl">
        Country Guides
      </Heading>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Link</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {allCountryGuidesData.map(({ id, title, description }) => (
            <Table.Row key={id}>
              <Table.Cell>
                <NextLink href={`/guides/${id}`}>{title}</NextLink>
              </Table.Cell>
              <Table.Cell>{description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      {/* Resources Presets */}
      <Heading as="h1" textAlign="center" my="10" size="4xl">
        Common Resources
      </Heading>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Link</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {recResources.map((resource) => (
            <Table.Row key={resource.title}>
              <Table.Cell>
                <NextLink
                  href={`/resources?${resource.searchParams}`}
                  color="blue.400"
                >
                  {resource.title}
                </NextLink>
              </Table.Cell>
              <Table.Cell>{resource.description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Layout>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const allCountryGuidesData = await getCountryGuidesData()
  return {
    props: {
      allCountryGuidesData,
    },
  }
}
const guides: { href: string; title: string; description: string }[] = [
  {
    href: 'intro',
    title: 'Introductory Guide',
    description:
      'Just getting into competitive Chemistry? Read this guide to have a proper start!',
  },
  {
    href: 'intermediate',
    title: 'Intermediate Guide',
    description:
      'Have no idea what IChO Prep problems you should try out? Read this guide!',
  },
  {
    href: 'lab',
    title: 'Laboratory Guide',
    description:
      'Read about how to tackle the laboratory section in competitive chemistry.',
  },
]
const recResources: {
  title: string
  searchParams: string
  description: string
}[] = [
  {
    title: 'Textbooks',
    searchParams: 'tags=Textbook',
    description: 'Recommended Textbooks for various tiers.',
  },
  {
    title: 'Bronze General',
    searchParams: 'tiers=Bronze&tags=General',
    description: 'General resources for bronze tier, AP/A level.',
  },
  {
    title: 'Silver General',
    searchParams: 'tiers=Silver&tags=General',
    description:
      'General resources for silver tier, National Chemistry Olympiad exam level.',
  },
  {
    title: 'Gold General',
    searchParams: 'tiers=Gold&tags=General',
    description: 'General resources for gold tier, IChO/Mendeleev level.',
  },
  {
    title: 'Organic',
    searchParams: 'tags=Organic',
    description: 'Organic chemistry resources for all tiers.',
  },
]
