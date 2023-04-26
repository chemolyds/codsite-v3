import {
  Box,
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
  VStack,
  useBreakpointValue,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FiMenu } from 'react-icons/fi'

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box as="section" pb={{ base: '12', md: '24' }}>
        <Box as="nav" bg="bg-surface" boxShadow="sm">
          <Container py={{ base: '4', lg: '5' }}>
            <HStack spacing="10" justify="space-between">
              <Heading size="md">CODSite</Heading>
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="link" spacing="8">
                    {routes.map((route) => (
                      <Button key={route.href} as={NextLink} href={route.href}>
                        {route.title}
                      </Button>
                    ))}
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
              Jerdan1980
              <Button onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
              </Button>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing="6" align="stretch" minW="full" mb="4">
              {routes.map((route) => (
                <Button
                  key={route.href}
                  as={NextLink}
                  href={route.href}
                  size="lg"
                  variant="link"
                >
                  {route.title}
                </Button>
              ))}
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
]
