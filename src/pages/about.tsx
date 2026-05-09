import Layout from '@/components/layout'
import { Link } from '@chakra-ui/next-js'
import {
  Container,
  Grid,
  GridItem,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import Image from 'next/image'

import anuragImg from '@/images/staff/AnuragSodhiCropped.png'
import dillionImg from '@/images/staff/dillion.jpeg'
import ayameImg from '@/images/staff/ayame.jpg'
import ihorImg from '@/images/staff/ihor.jpg'
import jeremyImg from '@/images/staff/jeremy-2x.png'
import kwanwooImg from '@/images/staff/kwanwoo-2x.png'
import nicolaiImg from '@/images/staff/nicolai.jpg'
import ranenImg from '@/images/staff/ranen.png'
import srikarImg from '@/images/staff/srikar.png'

export default function About() {
  return (
    <Layout title="About" description="About CODS staff and writers">
      <Heading as="h1" textAlign="center">
        Staff and Contacts
      </Heading>

      <Text textAlign="center" fontSize="lg">
        If you need to contact CODS as a whole (for sponsorships, questions,
        problems, concerns, etc.) please use our official email:
        chemolyds@gmail.com.
      </Text>

      <Heading textAlign="center" as="h2" mt="10">
        Staff Team
      </Heading>
      {activeStaff.map((staff) => (
        <Container key={staff.name}>
          <Heading as="h3" fontSize="4xl">
            {staff.name}
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap="4">
            <GridItem colSpan={{ base: 3, md: 1 }}>
              <Image src={staff.img} alt={`Picture of ${staff.name}`} />
            </GridItem>
            <GridItem colSpan={{ base: 3, md: 2 }}>
              <Text fontSize="lg">{staff.bio.join(' ')}</Text>
              <Text fontSize="lg">
                <b>Contact for:</b> {staff.contact_for}
              </Text>
            </GridItem>
          </Grid>
        </Container>
      ))}

      <Heading textAlign="center" as="h2" mt="10">
        Competition Coordinators
      </Heading>
      {activeCoord.map((coord) => (
        <Container key={coord.name}>
          <Heading as="h3" fontSize="4xl">
            {coord.name}
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap="4">
            <GridItem colSpan={{ base: 3, md: 1 }}>
              <Image src={coord.img} alt={`Picture of ${coord.name}`} />
            </GridItem>
            <GridItem colSpan={{ base: 3, md: 2 }}>
              <Text fontSize="lg">{coord.bio.join(' ')}</Text>
            </GridItem>
          </Grid>
        </Container>
      ))}

      <Heading as="h2" textAlign="center" mt="10" mb="4">
        Retired Staff Members
      </Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Staff Member</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Dillion Lim</Td>
            </Tr>
            <Tr>
              <Td>Anurag Sodhi</Td>
            </Tr>
            <Tr>
              <Td>Nicolai Bogø Stabell</Td>
            </Tr>
            <Tr>
              <Td>Anugrah Chemparathy</Td>
            </Tr>
            <Tr>
              <Td>Alec Zhu</Td>
            </Tr>
            <Tr>
              <Td>Philip Jeong</Td>
            </Tr>
            <Tr>
              <Td>Dan Ni</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Heading as="h1" textAlign="center" mt="10" mb="4">
        ISO Discord Network
      </Heading>
      <Text fontSize="lg" mb="5">
        We are a part of the International Science Olympiads Discord Network
        (ISODN). You can join our services and websites with their respective
        links below:
      </Text>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Science Olympiads</Th>
              <Th>Discord Link</Th>
              <Th>Website Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            {serverLinks.map((server) => (
              <Tr key={server.name}>
                <Td>{server.name}</Td>
                <Td>
                  <Link href={server.discord} color="blue.400">
                    Link
                  </Link>
                </Td>
                <Td>
                  {server.website ? (
                    <Link href={server.website} color="blue.400">
                      Link
                    </Link>
                  ) : (
                    'None'
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  )
}

const serverLinks = [
  {
    name: 'Chemistry Olympiads',
    discord: 'https://discord.gg/chemistryolympiad',
    website: 'https://chem.isodn.org',
  },
  {
    name: 'ISO Discord Network',
    discord: 'https://discord.gg/k3zkD2y',
  },
  {
    name: 'Mathematical Olympiads',
    discord: 'https://discord.gg/3sbwZdh',
    website: 'https://mathematics.isodn.org/',
  },
  {
    name: 'Physics Olympiad',
    discord: 'https://discord.gg/wyGAa49',
    website: 'https://physoly.tech/',
  },
  {
    name: 'Earth Science Olympiads',
    discord: 'https://discord.gg/ujvMHFV',
  },
  {
    name: 'Astronomy Olympiads',
    discord: 'https://discord.gg/8DJrk78',
  },
  {
    name: 'Biology Olympiads',
    discord: 'https://discord.gg/AzCQYY7',
  },
  {
    name: 'Linguistics Olympiads',
    discord: 'https://discord.gg/8RVtshPPTh',
  },
]

const activeStaff = [
  {
    name: 'Elizabeth Davis, USA',
    img: ayameImg,
    bio: [
      `Elizabeth leads CODS's Outreach initiative and has run its online community since 2019.`,
      `She is currently pursuing a doctorate in Pharmaceutical Studies at The Ohio State University and is an avid Buckeye fan.`,
      `In her free time, she enjoys singing, gaming, working out, and volunteering.`,
      `You can often find her hanging out in the CODS Discord so please stop by! `,
      `Discord: ayameelizasuzuki`,
    ],
    contact_for: 'MAIN CONTACT. Any sector.',
  },
  {
    name: 'Kwanwoo Park, USA',
    img: kwanwooImg,
    bio: [
      `Kwanwoo is a luxury chemist who wishes to be unidentified. He touches grass and works with benzene, perhaps reducing his life expectancy by 20 years.`,
      `Discord: fizzest`,
    ],
    contact_for: 'Discord Platform',
  },
  {
    name: 'Jeremy Tinana (jerdan1980), USA',
    img: jeremyImg,
    bio: [
      `Jeremy was part of CODS's initial admin team of 2018, and now works mainly on updating and maintaining the website and discord features.`,
      `He has bachelor degrees in (generalized) Chemistry and Computer Science from the University of Florida.`,
      `Aside from chemistry, Jeremy is a passionate reader, gamer, and cook.`,
      `Discord: jerdan1980`,
    ],
    contact_for: 'Website',
  },
  {
    name: 'Ranen Yong, Singapore',
    img: ranenImg,
    bio: [
      `Ranen joined the CODS community in 2023, and has been setting problems for our competitions since then.`,
      `Besides being a camper, he has dabbled in research, presenting his work on the synthesis and applications polypeptide complexes at the Singapore Science and Engineering Fair (SSEF).`,
      `Beyond chemistry, Ranen also enjoys music (particularly music theory and piano), cooking/eating, and anime.`,
      `Discord: rymh`,
    ],
    contact_for: 'Competitions',
  },
]

const activeCoord = [
  {
    name: 'Ihor Kholomieiev (Igeru#8910), Ukraine',
    img: ihorImg,
    bio: [
      `An avid competition writer since Fall 2021, Ihor first joined the staff team in 2022.`,
      `He is an IChO 2021 silver medalist and received multiple awards in his national olympiad.`,
      `He was a student in the National University of Kyiv where he did research in organic chemistry before transferring to the University of Groningen.`,
      `Aside from chemistry, he enjoys cooking and watching random YouTube videos.`,
      `Discord: igeru`,
    ],
  },
  {
    name: 'Srikar Kampalli, USA',
    img: srikarImg,
    bio: [
      `Srikar Kampalli is currently a sophomore at his high school and is passionate about biochemistry.`,
      `Aside from his chemistry interests, he loves getting into his garden, tending/watering to the plants, and getting bit by wasps in the process.`,
      `Discord: palladium`,
    ],
  },
]
