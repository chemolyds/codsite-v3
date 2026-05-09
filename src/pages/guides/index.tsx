import Layout from '@/components/layout'
import { getCountryGuidesData } from '@/lib/countryGuides'
import { Link } from '@chakra-ui/next-js'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  LinkOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Image,
  Tr,
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
      <Heading as="h1" textAlign="center" mb="10">
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
            <Card>
              <CardHeader>
                <Heading size="xs" pb="2">
                  <LinkOverlay href={`/guides/${guide.href}`} as={Link}>
                    {guide.title}
                  </LinkOverlay>
                </Heading>
              </CardHeader>
              <CardBody pt="0">{guide.description}</CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
      {/* Country Information */}
      <Heading as="h1" textAlign="center" my="10">
        Country Guides
      </Heading>
      <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Link</Th>
                    <Th>Description</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {allCountryGuidesData.map(({ id, title, description }) => (
                    <Tr key={id}>
                      <Td>
                        <Link href={`/guides/${id}`} color="blue.400">
                          {title}
                        </Link>
                      </Td>
                      <Td>{description}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
{/* Resources Presets */}
      <Heading as="h1" textAlign="center" my="10">
        Common Resources
      </Heading>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Link</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {recResources.map((resource) => (
              <Tr key={resource.title}>
                <Td>
                  <Link
                    href={`/resources?${resource.searchParams}`}
                    color="blue.400"
                  >
                    {resource.title}
                  </Link>
                </Td>
                <Td>{resource.description}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
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