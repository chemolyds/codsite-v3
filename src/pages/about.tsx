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

import anuragImg from '@/images/staff/Anurag.png'
import dillionImg from '@/images/staff/Dillion.jpeg'
import ayameImg from '@/images/staff/Ayame.jpg'
import ihorImg from '@/images/staff/Ihor.jpg'
import jeremyImg from '@/images/staff/Jeremy.png'
import kwanwooImg from '@/images/staff/Kwanwoo.png'
import ranenImg from '@/images/staff/Ranen.png'
import srikarImg from '@/images/staff/Srikar.jpg'

export default function About() {
  return (
    <Layout title="About" description="About CODStaff">
      <Heading as="h1" textAlign="center">
        Staff and Contacts
      </Heading>

      <Text textAlign="center" fontSize="lg">
        If you need to contact CODS as a whole (for sponsorships, questions,
        problems, concerns, etc.) please use our official email:
        chemolyds@gmail.com.
      </Text>

      <Heading textAlign="center" as="h2" mt="10">
        Active Staff Members
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
    name: 'Elizabeth (Ayame) Davis, USA',
    img: ayameImg,
    bio: [
      `Eliza leads various CODS initiatives and has run its online community since 2019.`,
      `She is currently pursuing a doctorate in Pharmaceutical Studies at The Ohio State University and is an avid Buckeye fan.`,
      `In her free time, she enjoys gaming, working out, writing, and hanging out with friends.`,
      `You can often find her hanging out in the CODS Discord so please stop by! `,
      `Discord: AyameElizaSuzuki`,
    ],
    contact_for: 'MAIN CONTACT. Any sector.',
  },
  {
    name: 'Srikar Kampalli, USA',
    img: srikarImg,
    bio: [
      `Srikar Kampalli is currently a sophomore at his high school and is passionate about biochemistry.`,
      `Aside from his chemistry interests, he loves getting into his garden, tending/watering to the plants, and getting bit by wasps in the process.`,
      `Discord: palladium`,
    ],
    contact_for: 'Lectures (PRIMARY)',
  },
  {
    name: 'Ihor Kholomieiev, Ukraine',
    img: ihorImg,
    bio: [
      `An avid competition writer since Fall 2021, Ihor first joined the staff team in 2022.`,
      `He is an IChO 2021 silver medalist and received multiple awards in his national olympiad.`,
      `He was a student in the National University of Kyiv where he did research in organic chemistry before transferring to the University of Groningen.`,
      `Aside from chemistry, he enjoys cooking and watching random YouTube videos.`,
      `Discord: Igeru#8910`,
    ],
    contact_for: 'Competitions',
  },
  {
    name: 'Dillion Lim, Singapore',
    img: dillionImg,
    bio: [
      `Dillion started off his journey with research in environmental chemistry, going so far as to participate in the International Science and Engineering Fair (ISEF).`,
      `He has ventured into Chemistry Olympiads and helps to mentor students. He also enjoys writing questions - you will see him writing a fair few questions in CODSCompetitions.`,
      `He firmly believes in the need for equitable access to quality resources, and thereby joined CODS in 2022 to help realise this dream for others.`,
      `Aside from chemistry, he enjoys programming and playing the piano.`,
      `Discord: theorangejuice`,
    ],
    contact_for: 'Competitions',
  },
  {
    name: 'Kwanwoo Park, USA',
    img: kwanwooImg,
    bio: [
      `Kwanwoo is a luxury chemist who wishes to be unidentified. He touches grass and works with benzene, perhaps reducing his life expectancy by 20 years.`,
      `Discord: fizzest`,
    ],
    contact_for: 'General Administration',
  },
  {
    name: 'Anurag Sodhi, USA',
    img: anuragImg,
    bio: [
      `Anurag is a senior in high school who has been part of the CODS community since 2018; he now helps edits for CODSCompetitions since SOCC '23.`,
      `An avid competitor in chemistry olympiad himself, Anurag has qualified for the United States IChO Team ('23, Gold Medalist) and the US Chemistry Olympiad Camp ('22, '23).`,
      `Asides from chemistry, Anurag enjoys following the NFL as well as grinding Tetris and chess.`,
      `He also occasionally plays frisbee or badminton.`,
      `Discord: a.new.rag`,
    ],
    contact_for: 'Competitions and Lectures',
  },
  {
    name: 'Jeremy Tinana, USA',
    img: jeremyImg,
    bio: [
      `Jeremy was part of CODS's initial admin team of 2018, and now works mainly on updating and maintaining the website and various discord community features.`,
      `He has bachelor degrees in Chemistry and Computer Science from the University of Florida.`,
      `Aside from chemistry, Jeremy is a passionate reader, gamer, and cook.`,
      `Discord: jerdan1980`,
    ],
    contact_for: 'Website (PRIMARY)',
  },
  {
    name: 'Ranen Yong, Singapore',
    img: ranenImg,
    bio: [
      `Ranen joined the CODS community in 2023, and has been leading the competition sector ever since.`,
      `Besides being a camper, he has dabbled in research, presenting his work on the synthesis and applications polypeptide complexes at the Singapore Science and Engineering Fair (SSEF).`,
      `Beyond chemistry, Ranen also enjoys music (particularly music theory and piano), cooking/eating, and anime.`,
      `Discord: rymh`,
    ],
    contact_for: 'Competitions (PRIMARY)',
  },
]
