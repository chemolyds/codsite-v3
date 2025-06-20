import {
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  Flex,
  HStack,
  Heading,
  IconButton,
  Menu,
  Portal,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { useState } from 'react'
import { FiChevronDown, FiMenu } from 'react-icons/fi'
import CodsLogo from './CodsLogo'
import {
  ColorModeButton,
  useColorMode,
  useColorModeValue,
} from './ui/color-mode'

export default function NavBar(props: BoxProps) {
  const { colorMode } = useColorMode()
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const [open, setOpen] = useState(false)

  return (
    <>
      <Box as="nav" bg="bg.muted" boxShadow="sm" {...props}>
        <Container py={{ base: '4', lg: '5' }}>
          <HStack gap="10" justify="space-between">
            {true ? (
              <Heading size="md">CODSite</Heading>
            ) : (
              <Box
                maxH="calc(4vh)"
                overflow="visible"
                position="relative"
                top="calc(-1.9vh)"
              >
                <CodsLogo
                  fill={colorMode === 'light' ? 'black' : 'white'}
                  width="calc(8vh)"
                  height="calc(8vh)"
                  /*style={{ backgroundColor: 'purple' }}*/
                />
              </Box>
            )}

            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="plain" gap="8">
                  {routes.map((route) =>
                    route.children ? (
                      <Menu.Root key={route.href}>
                        <Menu.Trigger asChild>
                          <Button>
                            {route.title} <FiChevronDown />
                          </Button>
                        </Menu.Trigger>
                        <Portal>
                          <Menu.Positioner>
                            <Menu.Content>
                              {route.children.map((child) => (
                                <Menu.Item
                                  key={child.href}
                                  asChild
                                  value={child.title}
                                >
                                  <NextLink
                                    href={`${route.href}/${child.href}`}
                                  >
                                    {child.title}
                                  </NextLink>
                                </Menu.Item>
                              ))}
                            </Menu.Content>
                          </Menu.Positioner>
                        </Portal>
                      </Menu.Root>
                    ) : (
                      <Button key={route.href} asChild>
                        <NextLink href={route.href}>{route.title}</NextLink>
                      </Button>
                    )
                  )}
                </ButtonGroup>
                <HStack gap="3">
                  <ColorModeButton />
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                aria-label="Open Menu"
                onClick={() => setOpen(true)}
              >
                <FiMenu fontSize="1.25rem" />
              </IconButton>
            )}
          </HStack>
        </Container>
      </Box>

      <Drawer.Root
        placement="top"
        open={open}
        onOpenChange={(e: any) => setOpen(e.open)}
      >
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Flex justify="space-between" flex="1">
                  <Heading size="md" pt="1.5">
                    CODSite
                  </Heading>

                  <ColorModeButton />

                  <IconButton
                    variant="ghost"
                    aria-label="Open Menu"
                    onClick={() => setOpen(false)}
                  >
                    <FiMenu fontSize="1.25rem" />
                  </IconButton>
                </Flex>
              </Drawer.Header>
              <Drawer.Body>
                <VStack gap="6" align="stretch" minW="full" mb="4">
                  {routes.map((route) => {
                    if (route.children) {
                      return route.children.map((child) => (
                        <Button
                          key={child.href}
                          size="lg"
                          variant="plain"
                          asChild
                        >
                          <NextLink href={`${route.href}/${child.href}`}>
                            {child.title}
                          </NextLink>
                        </Button>
                      ))
                    } else {
                      return (
                        <Button
                          size="lg"
                          key={route.href}
                          variant="plain"
                          asChild
                        >
                          <NextLink href={route.href}>{route.title}</NextLink>
                        </Button>
                      )
                    }
                  })}
                </VStack>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
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
    children: [
      {
        href: 'competitors_guide',
        title: `Competitor's Guide`,
      },
      {
        href: 'acot',
        title: 'ACOT',
      },
      {
        href: 'wcc',
        title: 'WCC',
      },
      {
        href: 'socc',
        title: 'SOCC',
      },
      {
        href: 'scho',
        title: 'SChO',
      },
    ],
  },
  {
    href: '',
    title: 'Resources',
    children: [
      {
        href: 'syllabus',
        title: `Competition Syllabus`,
      },
      {
        href: 'resources',
        title: 'Resources',
      },
      {
        href: 'guides',
        title: `Guides`,
      },
      {
        href: 'countryPapers',
        title: `Past Country Papers`,
      },
    ],
  },
  {
    href: '/courses',
    title: 'Courses',
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
