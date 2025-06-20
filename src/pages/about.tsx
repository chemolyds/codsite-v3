import Layout from '@/components/layout'
import {
  Container,
  Grid,
  GridItem,
  Heading,
  Table,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'

import anuragImg from '@/images/staff/AnuragSodhiCropped.png'
import ayameImg from '@/images/staff/ayame.jpg'
import dillionImg from '@/images/staff/dillion.jpeg'
import ihorImg from '@/images/staff/ihor.jpg'
import jeremyImg from '@/images/staff/jeremy-2x.png'
import kwanwooImg from '@/images/staff/kwanwoo-2x.png'
//import nicolaiImg from '@/images/staff/nicolai.jpg'
import ranenImg from '@/images/staff/ranen.png'
import { NextLink } from '@/components/ui/NextLink'

export default function About() {
  return (
    <Layout title="About" description="About CODStaff">
      <Heading as="h1" textAlign="center" size="5xl">
        Staff and Contacts
      </Heading>

      <Text textAlign="center" fontSize="lg">
        If you need to contact CODS as a whole (for sponsorships, questions,
        problems, concerns, etc.) please use our official email:
        chemolyds@gmail.com.
      </Text>

      <Heading textAlign="center" as="h2" mt="10" size="4xl">
        Active Staff Members
      </Heading>
      {activeStaff.map((staff) => (
        <Container key={staff.name}>
          <Heading as="h3" size="3xl">
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

      <Heading as="h2" textAlign="center" mt="10" mb="4" size="4xl">
        Retired Staff Members
      </Heading>
      <Table.Root variant="line">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Staff Member</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nicolai Bogø Stabell</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Anugrah Chemparathy</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Alec Zhu</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Philip Jeong</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Dan Ni</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>

      <Heading as="h1" textAlign="center" mt="10" mb="4" size="4xl">
        ISO Discord Network
      </Heading>
      <Text fontSize="lg" mb="5">
        We are a part of the International Science Olympiads Discord Network
        (ISODN). You can join our services and websites with their respective
        links below:
      </Text>
      <Table.Root variant="line">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Science Olympiads</Table.ColumnHeader>
            <Table.ColumnHeader>Discord Link</Table.ColumnHeader>
            <Table.ColumnHeader>Website Link</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {serverLinks.map((server) => (
            <Table.Row key={server.name}>
              <Table.Cell>{server.name}</Table.Cell>
              <Table.Cell>
                <NextLink href={server.discord}>Link</NextLink>
              </Table.Cell>
              <Table.Cell>
                {server.website ? (
                  <NextLink href={server.website}>Link</NextLink>
                ) : (
                  'None'
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
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
    name: 'Elizabeth Davis (ayameelizasuzuki), USA',
    img: ayameImg,
    bio: [
      `Elizabeth leads CODS's Outreach initiative and has run its online community since 2019.`,
      `She is currently pursuing a doctorate in Pharmaceutical Studies at The Ohio State University and is an avid Buckeye fan.`,
      `In her free time, she enjoys singing, gaming, working out, and volunteering.`,
      `You can often find her hanging out in the CODS Discord so please stop by! `,
    ],
    contact_for: 'MAIN CONTACT. Any sector.',
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
    contact_for: 'Lectures',
  },
  {
    name: 'Dillion Lim (theorangejuice), Singapore',
    img: dillionImg,
    bio: [
      `Dillion started off his journey with research in environmental chemistry, going so far as to participate in the International Science and Engineering Fair (ISEF).`,
      `He has ventured into Chemistry Olympiads and helps to mentor students. He also enjoys writing questions - you will see him writing a fair few questions in CODSCompetitions.`,
      `He firmly believes in the need for equitable access to quality resources, and thereby joined CODS in 2022 to help realise this dream for others.`,
      `Aside from chemistry, he enjoys programming and playing the piano.`,
    ],
    contact_for: 'Competitions',
  },
  {
    name: 'Kwanwoo Park (fizzest), USA',
    img: kwanwooImg,
    bio: [
      `Kwanwoo is a luxury chemist who wishes to be unidentified. He touches grass and works with benzene, perhaps reducing his life expectancy by 20 years.`,
    ],
    contact_for: 'No preferred sector',
  },
  {
    name: 'Anurag Sodhi (a.new.rag), USA',
    img: anuragImg,
    bio: [
      `Anurag is a senior in high school who has been part of the CODS community since 2018; he now helps edits (and occasionally writes) for CODSCompetitions since SOCC '23.`,
      `An avid competitor in chemistry olympiad himself, Anurag has qualified for the United States IChO Team ('23, Gold Medalist) and the US Chemistry Olympiad Camp ('22, '23).`,
      `Asides from chemistry, Anurag enjoys following the NFL as well as grinding Tetris and chess.`,
      `He also occasionally touches grass in the forms of playing frisbee or badminton.`,
    ],
    contact_for: 'Competitions, Lectures',
  },
  /*{
    name: 'Nicolai Bogø Stabell (Stabell#6680), Denmark',
    img: nicolaiImg,
    bio: [
      `Nicolai joined the staff team in 2020 as a competitions writer and later became head of competitions in 2021.`,
      `He has a background in physical chemistry from Technical University of Denmark where he also did research.`,
      `Besides CODS, he also mentors students in The Danish Chemistry Olympiad and has produced the highest number of national team members.`,
      `In his free time, he enjoys skiing, gaming and puzzles.`,
    ],
    sectors: 'Competitions, Writers, and Organization Administration.',
  },*/
  {
    name: 'Jeremy Tinana (jerdan1980), USA',
    img: jeremyImg,
    bio: [
      `Jeremy was part of CODS's initial admin team of 2018, and now works mainly on updating and maintaining the website and discord features.`,
      `He has bachelor degrees in (generalized) Chemistry and Computer Science from the University of Florida.`,
      `Aside from chemistry, Jeremy is a passionate reader, gamer, and cook.`,
    ],
    contact_for: 'Website, anything programming related',
  },
  {
    name: 'Ranen Yong (rymh), Singapore',
    img: ranenImg,
    bio: [
      `Ranen joined the CODS community in 2023, and has been setting problems for our competitions since then.`,
      `Besides being a camper, he has dabbled in research, presenting his work on the synthesis and applications polypeptide complexes at the Singapore Science and Engineering Fair (SSEF).`,
      `Beyond chemistry, Ranen also enjoys music (particularly music theory and piano), cooking/eating, and anime.`,
    ],
    contact_for: 'Competitions',
  },
]
