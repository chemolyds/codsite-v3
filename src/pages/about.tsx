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

import dillionImg from '@/images/staff/dillion.jpeg'
import elizaImg from '@/images/staff/eliza 2x.jpg'
import ihorImg from '@/images/staff/ihor.jpg'
import jeremyImg from '@/images/staff/jeremy 2x.jpg'
import kwanwooImg from '@/images/staff/kwanwoo 2x.jpg'
import nicolaiImg from '@/images/staff/nicolai.jpg'

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
        Active Staff Members
      </Heading>
      {activeStaff.map((staff) => (
        <Container key={staff.name}>
          <Heading as="h3" fontSize="4xl">
            {staff.name}
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap="4">
            <GridItem>
              <Image src={staff.img} alt={`Picture of ${staff.name}`} />
            </GridItem>
            <GridItem colSpan={2}>
              <Text fontSize="lg">{staff.bio.join(' ')}</Text>
              <Text fontSize="lg">
                <b>CODS Sectors:</b> {staff.sectors}
              </Text>
            </GridItem>
          </Grid>
        </Container>
      ))}

      <Heading as="h2" textAlign="center" mt="10" mb="4">
        Competition Writers
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap="4">
        {writers.sort().map((writer) => (
          <GridItem key={writer} textAlign="center" fontSize="lg">
            {writer}
          </GridItem>
        ))}
      </Grid>

      <Heading as="h2" textAlign="center" mt="10" mb="4">
        Inactive Staff Members
      </Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Staff Member</Th>
              <Th>Contact Information</Th>
              <Th>Additional Information</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Alec Zhu</Td>
              <Td>Discord: apc1234567#2989</Td>
              <Td>IChO Gold (&apos;19 and &apos;20 Camper)</Td>
            </Tr>
            <Tr>
              <Td>Anugrah Chemparathy</Td>
              <Td>Discord: llamachemist#3917</Td>
              <Td>IChO Gold (&apos;19 and &apos;20 Camper)</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Heading as="h2" textAlign="center" mt="10" mb="4">
        Retired Staff Members
      </Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Staff Member</Th>
              <Th>Contact Information</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Philip Jeong</Td>
              <Td>Discord: burts bees cucumber mint#2331</Td>
            </Tr>
            <Tr>
              <Td>Dan Ni</Td>
              <Td>Discord: dan.k.memes#5912</Td>
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

const writers = [
  'Anathan Sadagopan',
  'bluepianist#9293',
  'Ihor Kholomieiev',
  'Lasse Johnson',
  'Lim Dillion',
  'Lin Bigom-Eriksen',
  'Nick Ouyang',
  'Nick Tsao',
  'Qiyang Zhao',
  'Ron Shprints',
  'Thomas Falkenberg',
  'Tomasz Ślusarczyk',
  'Tristan Chau',
  'Yiwei Liang',
  'lof#4839',
  'Jeremy Tinana',
  'Nipun Dour',
  'Nishaant Jacobus',
  'Erick Wu',
  'Ray Zhou',
  'Matthionine#9769',
]

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
    name: 'Elizabeth Davis (AyameElizaSuzuki#6175), USA',
    img: elizaImg,
    bio: [
      `Elizabeth leads CODS's Outreach initiative and has run its online community since 2019.`,
      `She is currently studying Pharmaceutical Studies at The Ohio State University and is an avid Buckeye fan.`,
      `In her free time, she enjoys singing, gaming, working out, and volunteering.`,
      `You can often find her hanging out in the CODS Discord so please stop by! `,
    ],
    sectors: 'Outreach, Competition administration, Discord',
  },
  {
    name: 'Ihor Kholomieiev (Igeru#8910), Ukraine',
    img: ihorImg,
    bio: [
      `An avid competition writer since Fall 2021, Ihor first joined the staff team in 2022.`,
      `He is an IChO 2021 silver medalist and received multiple awards in his national olympiad.`,
      `He was a student in the National University of Kyiv where he did research in organic chemistry before transferring to the University of Groningen.`,
      `Aside from chemistry, he enjoys cooking and watching random YouTube videos.`,
    ],
    sectors: 'Lectures',
  },
  {
    name: 'Dillion Lim (TheOrangeJuice#8426), Singapore',
    img: dillionImg,
    bio: [
      `Dillion started off his journey with research in environmental chemistry, going so far as to participate in the International Science and Engineering Fair (ISEF).`,
      `He has ventured into Chemistry Olympiads and helps to mentor students. He also enjoys writing questions - you will see him writing a fair few questions in CODSCompetitions.`,
      `He firmly believes in the need for equitable access to quality resources, and thereby joined CODS in 2022 to help realise this dream for others.`,
      `Aside from chemistry, he enjoys programming and playing the piano.`,
    ],
    sectors: 'Resources',
  },
  {
    name: 'Kwanwoo Park (fizzest#0001), USA',
    img: kwanwooImg,
    bio: [`I'm a mysterious person`],
    sectors: 'Organizational Head',
  },
  {
    name: 'Nicolai Bogø Stabell (Stabell#6680), Denmark',
    img: nicolaiImg,
    bio: [
      `Nicolai joined the staff team in 2020 as a competitions writer and later became head of competitions in 2021.`,
      `He has a background in physical chemistry from Technical University of Denmark where he also did research.`,
      `Besides CODS, he also mentors students in The Danish Chemistry Olympiad and has produced the highest number of national team members.`,
      `In his free time, he enjoys skiing, gaming and puzzles.`,
    ],
    sectors: 'Competitions, Writers, and Organization Administration.',
  },
  {
    name: 'Jeremy Tinana (Jerdan1980#8056), USA',
    img: jeremyImg,
    bio: [
      `Jeremy was part of CODS's initial admin team of 2018, and now works mainly on updating and maintaining the website and discord features.`,
      `He has bachelor degrees in (generalized) Chemistry and Computer Science from the University of Florida.`,
      `Aside from chemistry, Jeremy is a passionate reader, gamer, and cook.`,
    ],
    sectors: 'Software Development',
  },
]
