import { Button, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

export function NextLink(props) {
  return (
    <ChakraLink {...props} asChild>
      <Link {...props} />
    </ChakraLink>
  )
}

export function LinkButton(props) {
  return (
    <Button {...props} asChild variant="plain">
      <NextLink {...props} />
    </Button>
  )
}
