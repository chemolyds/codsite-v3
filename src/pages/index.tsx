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
  LinkOverlay,
  ListItem,
  Text,
  UnorderedList,
  useColorMode,
} from '@chakra-ui/react'
import { ReactElement } from 'react'



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
          Our mission is to make competitive chemistry more...
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
          Open educational resources at CODSite
        </Heading>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap="8"
        >
          {resources.map((resource) => (
            <Card key={resource.title}>
              <CardBody>
                <Heading
                  fontSize="3xl"
                  textAlign="center"
                  as="h2"
                  color="blue.400"
                >
                  {resource.title}
                </Heading>
                <Container textAlign="center">{resource.description}</Container>
              </CardBody>
              {resource.link && (
                <LinkOverlay
                  href={resource.link}
                  className="after:absolute after:inset-0"
                  isExternal={resource.isExternal}
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

const resources: {
  link?: string
  isExternal?: boolean
  title: string
  description: string | ReactElement
}[] = [
  {
    link: '/competitions',
    title: 'Competitions',
    description: 'An archive of our four annual competitions.',
  },
  {
    link: '/resources',
    title: 'Resources',
    description: 'Compiled resources for all levels of chemistry.',
  },
  {
    link: '/guides',
    title: 'Guides',
    description: 'Introductory, advanced and country-specific guides.',
  },
  {
    link: 'https://www.youtube.com/@CODSYoutube/featured',
    title: 'YouTube',
    description: 'Lectures, problem solves, and award ceremonies.',
    isExternal: true,
  },
  {
    link: '/courses',
    title: 'Courses',
    description: 'Learning modules, practice problems, and tips and tricks.',
  },

  {
    link: 'https://tinyurl.com/codsmerch',
    title: 'Merch',
    description: 'Fun chemistry merch for our community!',
    isExternal: true,
  },
]
