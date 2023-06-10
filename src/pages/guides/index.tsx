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
      <Grid templateColumns="repeat(3, 1fr)" gap={8} mt="10">
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

      {/* Country Guides */}
      <Accordion allowToggle mt={10}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Country Guides
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <TableContainer>
              <Table>
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
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allCountryGuidesData = await getCountryGuidesData()
  console.log(allCountryGuidesData)
  return {
    props: {
      allCountryGuidesData,
    },
  }
}

const guides = [
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
