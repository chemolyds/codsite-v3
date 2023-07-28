import { Link } from '@chakra-ui/next-js'
import {
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Center,
  Container,
  Grid,
  GridItem,
  HStack,
  Show,
  Stack,
  VStack,
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

        {/* Page Links Desktop */}
        <Show above="md">
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
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
        </Show>

        {/* Page Links Mobile */}
        <Show below="md">
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {routesMobile.map((routeGroup) =>
              routeGroup.map((route) => (
                <GridItem colSpan={2 / routeGroup.length} key={route.href}>
                  <Center>
                    <Button as={NextLink} href={route.href} variant="link">
                      {route.title}
                    </Button>
                  </Center>
                </GridItem>
              ))
            )}
          </Grid>
        </Show>
      </Container>

      {/* Social Links */}
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
              Gmail
            </Link>
            <Link color="blue.400" href="mailto:chem@isodn.org">
              ISODN
            </Link>
          </Stack>
        </Container>
      </Box>
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

const routesMobile = routes.reduce(
  (accum: { href: string; title: string }[][], val, i) => {
    if (i % 2 === 0) accum.push([val])
    else accum[Math.trunc(i / 2)].push(val)
    return accum
  },
  []
)
