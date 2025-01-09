import Layout from '@/components/layout'
import { Link } from '@chakra-ui/next-js'
import {
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
import CountryGuide from './guides/[id]'
import { ReactElement } from 'react'

export default function Page() {
  return (
    <Layout title="Country Papers" description="Country Papers">
      <Heading as="h1" textAlign="center" mb="10">
        Past Country Papers
      </Heading>
      {/* Country Papers*/}
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={8}
        mt="10"
      >
        {countryPapers.map((countryPapers) => (
          <GridItem key={countryPapers.href}>
            <Card>
              <CardHeader>
                <Heading size="xs" pb="2">
                  <LinkOverlay href={`${countryPapers.href}`} as={Link}>
                    {countryPapers.title}
                  </LinkOverlay>
                </Heading>
              </CardHeader>
              <CardBody pt="0">{countryPapers.description}</CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
  </Layout>
)
}

const countryPapers: {
  link?: string
  isExternal?: boolean
  title: string | ReactElement
}[] = [
  {
    href: 'https://oaq.exactas.uba.ar/index.php?option=com_content&view=article&id=6&Itemid=128',
    title: <center> 'Argentina' </center>,
  },
  {
    href: 'https://www.asi.edu.au/program/australian-science-olympiads/past-exams-with-answers/chemistry-olympiad-past-exams/',
    title: <center> 'Australia' </center>,
  },
  {
    href: 'https://www.oecho.at/austrian-chemistry-olympiad/exercises/',
    title: <center> 'Austria' </center>,
  },
  {
    href: 'https://www.eko.ut.ee/rko/bko/',
    title: <center> 'Baltic' </center>,
  },
  {
    href: 'https://superhimiki.bsu.by/default_en.html',
    title: <center> 'Belarus' </center>,
  },
  {
    href: 'https://obquimica.org/olimpiadas/index/olimpiada-brasileira-de-quimica/item/exames',
    title: <center> 'Canada' </center>,
  },
  {
    href: 'https://olympiada.vscht.cz/cs/ulohy/kategorie-a/',
    title: <center> 'Czech Republic' </center>,
  },
  {
    href: 'https://dcho.us/icho-1',
    title: <center> 'IChO' </center>,
  },
  {
    href: 'https://olympiads.hbcse.tifr.res.in/how-to-prepare/past-papers/',
    title: <center> 'India' </center>,
  },
  {
    href: 'https://gp.csj.jp/examarchives/',
    title: <center> 'Japan' </center>,
  },
  {
    href: 'https://dcho.us/mendeleev',
    title: <center> 'Mendeleev' </center>,
  },
  {
    href: 'https://www.scheikundeolympiade.science.ru.nl/nationaal/',
    title: <center> 'Netherlands' </center>,
  },
  {
    href: 'https://www.canterbury.ac.nz/study/academic-study/science/science-outreach-for-schools/chemistry-olympiad#accordion-aed3bb5525-item-e4695e8f98-button',
    title: <center> 'New Zealand' </center>,
  },
  {
    href: 'https://dcho.us/mendeleev',
    title: <center> 'Mendeleev' </center>,
  },
  {
    href: 'https://www.olchem.edu.pl/kategoria_zadan/olimpiady-krajowe/',
    title: <center> 'Poland' </center>,
  },
  {
    href: 'http://www.chem.msu.su/rus/olimp/',
    title: <center> 'Russia' </center>,
  },
  {
    href: 'https://www.mojahemija.org/%D1%82%D0%B0%D0%BA%D0%BC%D0%B8%D1%87%D0%B5%D1%9A%D0%B5-%D0%B7%D0%B0-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5-%D1%88%D0%BA%D0%BE%D0%BB%D0%B5/%D0%B7%D0%B0%D0%B4%D0%B0%D1%86%D0%B8-%D1%81%D0%B0-%D0%BF%D1%80%D0%B5%D1%82%D1%85%D0%BE%D0%B4%D0%BD%D0%B8%D1%85-%D1%82%D0%B0%D0%BA%D0%BC%D0%B8%D1%87%D0%B5%D1%9A%D0%B0',
    title: <center> 'Serbia' </center>,
  },
  {
    href: 'https://www.posn.or.th/examination',
    title: <center> 'Thailand' </center>,
  },
  {
    href: 'https://www.ukrchemolimp.com/index.php?con=prob',
    title: <center> 'Ukraine' </center>,
  },
  {
    href: 'https://edu.rsc.org/enrichment/uk-chemistry-olympiad',
    title: <center> 'United Kingdom' </center>,
  },
  {
    href: 'https://www.acs.org/education/olympiad/prepare-for-exams.html',
    title: <center> 'United States of America' </center>,
  },
  {
    href: 'https://tapchikem.com/blogs/bai-giang/hsgquocgia',
    title: <center> 'Vietnam' </center>,
  },
]