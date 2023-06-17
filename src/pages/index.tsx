import CodsLogo from '@/components/CodsLogo'
import Layout from '@/components/layout'
import { Link } from '@chakra-ui/next-js'
import {
  Card,
  CardBody,
  Center,
  Container,
  Grid,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  useColorMode,
} from '@chakra-ui/react'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Layout title="Home" description="CODSite Homepage">
      <Center>
        <CodsLogo
          fill={colorMode === 'light' ? 'black' : 'white'}
          width="calc(50vh)"
          height="calc(50vh)"
          /*style={{ backgroundColor: 'purple' }}*/
        />
      </Center>

      <Container px={{ base: 4, md: 20 }} maxW="full">
        {/* CODS Community */}
        <Heading textAlign="center" as="h2" fontSize="3xl">
          CODS is a global community made for Chemistry Olympiad participants
        </Heading>
        <Heading fontSize="2xl" textAlign="center" as="h3" fontWeight={400}>
          Haven&apos;t joined the community yet? You can join{' '}
          <Link href="https://discord.gg/chemistryolympiad" color="blue.400">
            here
          </Link>
          .
        </Heading>

        {/* Mission Statement */}
        <Heading fontSize="3xl" mt="10" as="h3" fontWeight={400}>
          Our mission is to make Competitive Chemistry more...
        </Heading>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap="8"
        >
          {mission.map((card) => (
            <Card key={card.header}>
              <CardBody>
                <Heading fontSize="4xl" as="h2">
                  {card.header}
                </Heading>
                <Text>{card.description}</Text>
              </CardBody>
            </Card>
          ))}
        </Grid>

        {/* Website Purpose */}
        <Heading fontSize="3xl" textAlign="center" mt="10" as="h2">
          What is CODSite for?
        </Heading>
        <Text align="center">
          CODSite is an all-purpose website made for your community (competitive
          chemistry enthusiasts). Everything on CODSite is free to use for
          anybody, no sign-ups or membership required. We provide custom{' '}
          <b>open educational resources</b> such as lectures, detailed notes,
          useful websites, problem sets, guides, tools, and all of our past
          competition papers. Anything a chemistry freak could dream of lies
          within this website.
        </Text>

        {/* Resources QuickLinks */}
        <Heading fontSize="3xl" textAlign="center" mt="10" as="h2">
          Open Educational Resources at CODSite
        </Heading>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap="8"
        >
          {resources.map((resource) => (
            <Card key={resource.title}>
              <CardBody>
                <Heading fontSize="3xl" textAlign="center" as="h2">
                  {resource.title}
                </Heading>
                <Container textAlign="center">{resource.description}</Container>
              </CardBody>
              {resource.link && (
                <Link
                  href={resource.link}
                  className="after:absolute after:inset-0"
                />
              )}
            </Card>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

const mission = [
  {
    header: 'Competitive',
    description:
      'by leveling out the playing field of competitive chemistry, we hope to increase the standards of Chemistry Olympiads.',
  },
  {
    header: 'Accessible',
    description:
      'to a wider audience. We run four annual competitions for anyone around the world to compete in and provide guides for anyone to get started.',
  },
  {
    header: 'Fair',
    description:
      'for everyone by providing guides for all levels of participants. We also provide high quality custom study resources to asssist your journey.',
  },
]

const resources = [
  {
    link: 'https://www.youtube.com/channel/UCyO5Wn2qKDRYWC-F5EfN2kA',
    title: 'Lectures',
    description:
      'We provide lectures for everyone, from introductory lectures to problem solving and advanced topic lectures. You can watch our lectures on our YouTube channel.',
  },
  {
    link: 'https://drive.google.com/drive/u/4/folders/195kcNDwljvw1w5ZKVWzpE7LCdbvwQzVL',
    title: 'CODSNotes',
    description:
      'Made specially for the CODS community, these notes cover the fundamentals required for competitive chemistry, from Atomic Strucutres to Organic Chemistry.',
  },
  {
    link: '/guides',
    title: 'Guides',
    description:
      'Our staff is dedicated to writing guides for all levels. From introductory guides to those for the IChO level, there is a guide for anyone written by the the best in the competitive chemistry scene.',
  },
  {
    link: '/competitions',
    title: 'Past Papers',
    description:
      'All of our pastcompetition papers are released to the public and can be accessed immediately. Click here to access our list of past exams.',
  },
  {
    title: 'Competitions',
    description: (
      <>
        We provide four annual chemistry competitions for anyone to participate.
        For more information:
        <UnorderedList mt="2">
          <ListItem color="blue.400" style={{ listStyle: 'none' }} my="2">
            <Link href="/competitions/competitors_guide">
              Competitor&apos;s Guide
            </Link>
          </ListItem>
          <ListItem color="blue.400" style={{ listStyle: 'none' }} my="2">
            <Link href="/competitions/acot">ACOT</Link>
          </ListItem>
          <ListItem color="blue.400" style={{ listStyle: 'none' }} my="2">
            <Link href="/competitions/wcc">WCC</Link>
          </ListItem>
          <ListItem color="blue.400" style={{ listStyle: 'none' }} my="2">
            <Link href="/competitions/socc">SOCC</Link>
          </ListItem>
          <ListItem color="blue.400" style={{ listStyle: 'none' }} my="2">
            <Link href="/compeitions/scho">SChO</Link>
          </ListItem>
        </UnorderedList>
      </>
    ),
  },
  {
    title: 'Courses (WIP)',
    description:
      'Made specifically for chemistry olympiad participants, these courses will go over the fundamentals required for competitive chemistry, providing a variety of practice problems, tips, and tricks for competitors at any skill level.',
  },
]
