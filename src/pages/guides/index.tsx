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
      <Accordion allowToggle mt={10}>
        <AccordionItem>
          <h2>
            <AccordionButton blockSize="14">
              <Box as="span" flex="1" textAlign="left" fontSize="xl">
                Country Guides
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
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
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton blockSize="14">
              <Box as="span" flex="1" textAlign="left" fontSize="xl">
                Country Websites
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Link</Th>
                    <Th>Flag</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {countryWebsites.map((website) => (
                    <Tr key={website[2]}>
                      <Td>
                        <Link href={website[1]} isExternal color="blue.400">
                          {website[2]}
                        </Link>
                      </Td>
                      <Td>
                        <Image
                          src={website[0]}
                          alt={`Flag of ${website[2]}`}
                          width={300}
                          height={200}
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

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

const countryWebsites = [
  // Flag, Link, Name
  ['https://i.imgur.com/Lw5CgYu.jpg', 'https://www.oecho.at/de/', 'Austria'],
  ['https://i.imgur.com/jJDO1kT.png', 'https://cco-occ.ca/', 'Canada'],
  ['https://i.imgur.com/aVY3Icz.jpg', 'http://www1.chemsoc.org.cn/', 'China'],
  [
    'https://i.imgur.com/CWhtOQY.jpg',
    'https://olympiada.vscht.cz/cs/',
    'Czech Republic',
  ],
  [
    'https://i.imgur.com/K5uq50y.jpg',
    'http://olimpia.chem.elte.hu/',
    'Hungary',
  ],
  [
    'https://i.imgur.com/RTo92Ng.png',
    'https://chem.hbcse.tifr.res.in/in-india/',
    'India',
  ],
  ['https://i.imgur.com/iguxVSb.png', 'https://gp.csj.jp/next/', 'Japan'],
  [
    'https://i.imgur.com/QW3o4GM.jpg',
    'https://chemolympiad.kcsnet.or.kr/',
    'Korea',
  ],
  ['https://i.imgur.com/3iV2jtw.png', 'https://www.olchem.edu.pl/', 'Poland'],
  [
    'https://i.imgur.com/T1amxsU.jpg',
    'http://www.chem.msu.su/rus/olimp/welcome.html',
    'Romania',
  ],
  ['https://i.imgur.com/RGtpsGq.jpg', 'http://chemspb.3dn.ru/', 'Russia'],
  [
    'https://i.imgur.com/z5UHPfE.png',
    'https://chemistry.nus.edu.sg/outreach/community-outreach/cho/',
    'Singapore',
  ],
  ['https://i.imgur.com/VjcACjD.jpg', 'https://www.posn.or.th/', 'Thailand'],
  [
    'https://i.imgur.com/RNZIlaW.jpg',
    'http://www.ukrchemolimp.com/',
    'Ukraine',
  ],
  [
    'https://i.imgur.com/CqEj58E.jpg',
    'https://edu.rsc.org/enrichment/uk-chemistry-olympiad',
    'United Kingdom',
  ],
  [
    'https://i.imgur.com/q0dLdG9.jpg',
    'https://www.acs.org/content/acs/en/education/students/highschool/olympiad.html',
    'United States of America',
  ],
  [
    'https://i.imgur.com/tWeYKx5.jpg',
    'https://olympichoahocxi.hcmus.edu.vn/',
    'Vietnam',
  ],
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
