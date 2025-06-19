import { Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

export function NextLink(props) {
  return (
    <ChakraLink asChild>
      <Link {...props} />
    </ChakraLink>
  )
}
