//import { Link, LinkProps } from '@chakra-ui/next-js'
import NextLink from 'next/link'
import {
  Table,
  TableContainer,
  TableProps,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Link,
  LinkProps,
  Box,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export const ChakraMdxComponents = {
  Link: Link,
  table: (props: TableProps) => (
    <TableContainer>
      <Table {...props} />
    </TableContainer>
  ),
  thead: Thead,
  tr: Tr,
  th: Th,
  tbody: Tbody,
  td: Td,
}
