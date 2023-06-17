//import { Link, LinkProps } from '@chakra-ui/next-js'
import {
  Link,
  Table,
  TableContainer,
  TableProps,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

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
