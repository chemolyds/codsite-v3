import {
  Box,
  BoxProps,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Show,
  Stack,
} from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import CodsLogo from './CodsLogo'
import { useColorMode } from './ui/color-mode'
import { LinkButton } from './ui/NextLink'

export default function Footer(props: BoxProps) {
  const { colorMode } = useColorMode()

  return (
    <Box bg="bg-surface" boxShadow="sm" py={4} as="section" {...props}>
      <Container as={Stack} maxW="6xl" py={4} gap={4} centerContent>
        <CodsLogo
          fill={colorMode === 'light' ? 'black' : 'white'}
          width="calc(5vh)"
          height="calc(5vh)"
        />

        {/* Page Links Desktop */}
        <Grid templateColumns="repeat(5, 1fr)" gap={6} hideBelow="md">
          {routes.map((route) => (
            <Button key={route.href} variant="plain">
              <NextLink href={route.href}>{route.title}</NextLink>
            </Button>
          ))}
        </Grid>

        {/* Page Links Mobile */}
        <Grid templateColumns="repeat(2, 1fr)" gap={6} hideFrom={['lg', 'xl']}>
          {routesMobile.map((routeGroup) =>
            routeGroup.map((route) => (
              <GridItem colSpan={2 / routeGroup.length} key={route.href}>
                <Center>
                  <LinkButton href={route.href}>{route.title}</LinkButton>
                </Center>
              </GridItem>
            ))
          )}
        </Grid>
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
          gap={4}
          centerContent
        >
          <Stack direction={'row'} gap={6}>
            <NextLink
              color="blue.400"
              href="https://discord.gg/chemistryolympiad"
            >
              Discord
            </NextLink>
            <NextLink color="blue.400" href="mailto:chemolyds@gmail.com">
              Gmail
            </NextLink>
            <NextLink color="blue.400" href="mailto:cods@isodn.org">
              ISODN
            </NextLink>
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
