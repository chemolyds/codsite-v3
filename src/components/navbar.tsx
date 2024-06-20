import {
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
  useBreakpointValue,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { FiChevronDown, FiMenu } from 'react-icons/fi'
import CodsLogo from './CodsLogo'
import { Fragment } from 'react'

export default function NavBar(props: BoxProps) {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box as="section" {...props}>
        <Box as="nav" bg="bg-surface" boxShadow="sm">
          <Container py={{ base: '4', lg: '5' }}>
            <HStack spacing="10" justify="space-between">
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
                  <ButtonGroup variant="link" spacing="8">
                    {routes.map((route) =>
                      route.children ? (
                        <Menu key={route.href}>
                          <MenuButton as={Button} rightIcon={<FiChevronDown />}>
                            {route.title}
                          </MenuButton>
                          <MenuList>
                            {route.children.map((child) => (
                              <MenuItem
                                key={child.href}
                                as={NextLink}
                                href={`${route.href}/${child.href}`}
                              >
                                {child.title}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </Menu>
                      ) : (
                        <Button
                          key={route.href}
                          as={NextLink}
                          href={route.href}
                        >
                          {route.title}
                        </Button>
                      )
                    )}
                  </ButtonGroup>
                  <HStack spacing="3">
                    <Button onClick={toggleColorMode} variant="ghost">
                      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                    </Button>
                  </HStack>
                </Flex>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                  onClick={onOpen}
                />
              )}
            </HStack>
          </Container>
        </Box>
      </Box>

      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex justify="space-between" flex="1">
              CODSite
              <Button onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
              </Button>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing="6" align="stretch" minW="full" mb="4">
              {routes.map((route) => {
                if (route.children) {
                  return route.children.map((child) => (
                    <Button
                      key={child.href}
                      as={NextLink}
                      href={`${route.href}/${child.href}`}
                      size="lg"
                      variant="link"
                    >
                      {child.title}
                    </Button>
                  ))
                } else {
                  return (
                    <Button
                      as={NextLink}
                      href={route.href}
                      size="lg"
                      variant="link"
                      key={route.href}
                    >
                      {route.title}
                    </Button>
                  )
                }
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
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
        href: 'syllabus',
        title: `Syllabus`,
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
        href: 'resources',
        title: 'Resources',
      },
      {
        href: 'guides',
        title: `Guides`,
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
  {
    href: '/personal',
    title: 'Dashboard',
  },
]
