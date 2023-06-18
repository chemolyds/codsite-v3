import { Link } from '@chakra-ui/next-js'
import {
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Center,
  Container,
  Grid,
  Stack,
  useColorMode,
} from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import CodsLogo from './CodsLogo'

export default function Footer(props: BoxProps) {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box bg="bg-surface" boxShadow="sm" py={4} as="section" {...props}>
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        spacing={4}
        justify="center"
        align="center"
      >
        <CodsLogo
          fill={colorMode === 'light' ? 'black' : 'white'}
          width="calc(5vh)"
          height="calc(5vh)"
        />

        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}
          gap={6}
        >
          {routes.map((route) => (
            <Button
              key={route.href}
              as={NextLink}
              href={route.href}
              variant="link"
            >
              {route.title}
            </Button>
          ))}
        </Grid>
      </Container>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify="center"
          align="center"
        >
          <Stack direction={'row'} spacing={6}>
            <Link color="blue.400" href="https://discord.gg/chemistryolympiad">
              Discord
            </Link>
            <Link color="blue.400" href="mailto:chemolyds@gmail.com">
              gmail
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  )

  return (
    <Box bg="bg-surface" boxShadow="sm" py={10} as="section" {...props}>
      <Center>
        <ButtonGroup variant="link" spacing="8">
          {routes.map((route) => (
            <Button key={route.href} as={NextLink} href={route.href}>
              {route.title}
            </Button>
          ))}
        </ButtonGroup>
      </Center>

      <Center mt="5">
        CODSite was made by our community and staff members on the CODServer. If
        you would like to contribute, visit our Github.
      </Center>

      <Center>
        For inquiries, click{' '}
        <Link color="blue.400" href="/about">
          here
        </Link>
        . For donations, contact{' '}
        <Link color="blue.400" href="mailto:chemolyds@gmail.com">
          chemolyds@gmail.com
        </Link>
      </Center>

      {/*
      <Center>
        <HStack>
          <Text fontSize="4xl" fontWeight="extrabold">
            -
          </Text>
          <Text fontSize="4xl" fontWeight="extrabold" color="#e70011">
            C
          </Text>
          <Text fontSize="4xl" fontWeight="extrabold" color="#f9be00">
            O
          </Text>
          <Text fontSize="4xl" fontWeight="extrabold" color="#009c44">
            D
          </Text>
          <Text fontSize="4xl" fontWeight="extrabold" color="#1055bd">
            S
          </Text>
          <Text fontSize="4xl" fontWeight="extrabold">
            -
          </Text>
        </HStack>
      </Center>
      */}
    </Box>
  )
}

const routes = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/competitions',
    title: 'Competitions',
  },
  {
    href: '/resources',
    title: 'Resources',
  },
  {
    href: '/faq',
    title: 'FAQ',
  },
  {
    href: '/about',
    title: 'About',
  },
]
