import { Link } from '@chakra-ui/next-js'
import { Box, BoxProps, Button, ButtonGroup, Center } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'

export default function Footer(props: BoxProps) {
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
        For inquiries, click &lrm;
        <Link color="blue.400" href="/about">
          here
        </Link>
        . For donations, contact &lrm;
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
