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
    href: 'https://www.eko.ut.ee/rko/bko/',
    title: 'Baltic',
  },
  {
    href: 'https://dcho.us/mendeleev',
    title: 'Mendeleev',
  },
  {
    href: 'https://dcho.us/icho-1',
    title: 'IChO',
  },
  {
    href: 'https://oaq.exactas.uba.ar/index.php?option=com_content&view=article&id=6&Itemid=128',
    title: 'Argentina',
  },
  {
    href: 'https://olymp.am/hy',
    title: 'Armenia',
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
    href: 'https://aclg.be/olympiades/francophones/',
    title: 'Belgium',
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
    href: 'https://www.kemiolympiade.dk/kontaktoplysninger/',
    title: 'Denmark',
  },
  {
    href: 'https://maol.fi/neljan-tieteen-kisat/vanhat-kilpailutehtavat/',
    title: 'Finland',
  },
  {
    href: 'https://www.sciencesalecole.org/olympiades-internationales-de-chimie-ressources/#1615976195259-bfd967d9-01c7',
    title: 'France',
  },
  {
    href: 'https://www.oktatas.hu/kozneveles/tanulmanyi_versenyek_/oktv_kereteben/versenyfeladatok_javitasi_utmutatok/tartalomjegyzek/kemia_I',
    title: 'Hungary (category 1)',
  },
  {
    href: 'https://www.oktatas.hu/kozneveles/tanulmanyi_versenyek_/oktv_kereteben/versenyfeladatok_javitasi_utmutatok/tartalomjegyzek/kemia_II',
    title: 'Hungary (category 2)',
  },
  {
    href: 'https://efn.is/?page_id=45',
    title: 'Iceland',
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
    href: 'https://www.soc.chim.it/giochi_della_chimica/edizioni',
    title: 'Italy',
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
    href: 'https://www.mazakimijasskola.lv/res/valsts',
    title: 'Latvia',
  },
  {
    href: 'https://olimpiados.lt/chemija',
    title: 'Lithuania',
  },
  {
    href: 'https://scheikundeolympiade.science.ru.nl/index.html',
    title: 'Netherlands',
  },
  {
    href: 'https://foreninger.uio.no/kjemiolympiaden/oppgaver/',
    title: 'Norway',
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
    href: 'https://chemickaolympiada.sk/archiv-cho/',
    title: 'Slovakia',
  },
  {
    href: 'https://rseq.org/olimpiadas-de-quimica/olimpiada-nacional-de-quimica-historico/',
    title: 'Spain',
  },
  {
    href: 'http://kemisamfundet.se/kemi-i-skolan/kemiolympiaden/',
    title: 'Sweden',
  },
  {
    href: 'https://chemistry.olympiad.ch/de/navigation-rechts/exams?tx_filelist_filelist%5Baction%5D=list&tx_filelist_filelist%5Bcontroller%5D=File&tx_filelist_filelist%5Bpath%5D=%2Fuser_upload%2FArchiv%2FPublic%2FBrain_Food%2FChemistry%2FExams%2F&cHash=207091fa84211a8c9205f3e21a581274',
    title: 'Switzerland',
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
    title: 'United States',
  },
]

