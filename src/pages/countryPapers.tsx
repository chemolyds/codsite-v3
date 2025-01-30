import Layout from '@/components/layout'
import { Link } from '@chakra-ui/next-js'
import {
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  LinkOverlay,
} from '@chakra-ui/react'
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
                    <center>{countryPapers.title}</center>
                  </LinkOverlay>
                </Heading>
              </CardHeader>
              <CardBody pt="0"></CardBody>
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
  href: string
}[] = [
  {
    href: 'https://oaq.exactas.uba.ar/index.php?option=com_content&view=article&id=6&Itemid=128',
    title: 'Argentina',
  },
  {
    href: 'https://www.asi.edu.au/program/australian-science-olympiads/past-exams-with-answers/chemistry-olympiad-past-exams/',
    title: 'Australia',
  },
  {
    href: 'https://www.oecho.at/austrian-chemistry-olympiad/exercises/',
    title: 'Austria',
  },
  {
    href: 'https://www.eko.ut.ee/rko/bko/',
    title: 'Baltic',
  },
  {
    href: 'https://superhimiki.bsu.by/default_en.html',
    title: 'Belarus',
  },
  {
    href: 'https://obquimica.org/olimpiadas/index/olimpiada-brasileira-de-quimica/item/exames',
    title: 'Brazil',
  },
  {
    href: 'https://www.cheminst.ca/discover/canadian-chemistry-contest/',
    title: 'Canada',
  },
  {
    href: 'http://www1.chemsoc.org.cn/news/newlist.asp?hzi=6&hci=17&hfu=10',
    title: 'China',
  },
  {
    href: 'https://olympiada.vscht.cz/cs/ulohy/kategorie-a/',
    title: 'Czech Republic',
  },
  {
    href: 'https://www.scienceolympiaden.de/icho/material/aufgabenarchiv-icho',
    title: 'Germany',
  },
  {
    href: 'https://dcho.us/icho-1',
    title: 'IChO',
  },
  {
    href: 'https://chem.hbcse.tifr.res.in/indian-national-chemistry-olympiad-2002-2007/',
    title: 'India (old)',
  },
  {
    href: 'https://olympiads.hbcse.tifr.res.in/how-to-prepare/past-papers/',
    title: 'India (new)',
  },
  {
    href: 'https://gp.csj.jp/examarchives/',
    title: 'Japan',
  },
  {
    href: 'https://chemolympiad.kcsnet.or.kr/kmchc_solve',
    title: 'Korea (middle school)',
  },
  {
    href: 'https://dcho.us/mendeleev',
    title: 'Mendeleev',
  },
  {
    href: 'https://www.scheikundeolympiade.science.ru.nl/nationaal/',
    title: 'Netherlands',
  },
  {
    href: 'https://www.canterbury.ac.nz/study/academic-study/science/science-outreach-for-schools/chemistry-olympiad#accordion-aed3bb5525-item-e4695e8f98-button',
    title: 'New Zealand',
  },
  {
    href: 'https://www.olchem.edu.pl/kategoria_zadan/olimpiady-krajowe/',
    title: 'Poland',
  },
  {
    href: 'http://www.chem.msu.su/rus/olimp/',
    title: 'Russia',
  },
  {
    href: 'https://www.mojahemija.org/%D1%82%D0%B0%D0%BA%D0%BC%D0%B8%D1%87%D0%B5%D1%9A%D0%B5-%D0%B7%D0%B0-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5-%D1%88%D0%BA%D0%BE%D0%BB%D0%B5/%D0%B7%D0%B0%D0%B4%D0%B0%D1%86%D0%B8-%D1%81%D0%B0-%D0%BF%D1%80%D0%B5%D1%82%D1%85%D0%BE%D0%B4%D0%BD%D0%B8%D1%85-%D1%82%D0%B0%D0%BA%D0%BC%D0%B8%D1%87%D0%B5%D1%9A%D0%B0',
    title: 'Serbia',
  },
  {
    href: 'https://www.posn.or.th/examination',
    title: 'Thailand',
  },
  {
    href: 'https://bilimolimpiyatlari.tubitak.gov.tr/tr/gecmis-sinav-sorulari',
    title: 'Turkey',
  },
  {
    href: 'https://www.ukrchemolimp.com/index.php?con=prob',
    title: 'Ukraine',
  },
  {
    href: 'https://edu.rsc.org/enrichment/uk-chemistry-olympiad',
    title: 'United Kingdom',
  },
  {
    href: 'https://www.acs.org/education/olympiad/prepare-for-exams.html',
    title: 'United States of America',
  },
]
