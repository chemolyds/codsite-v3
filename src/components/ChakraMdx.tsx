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
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

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

export const MdxOptions = {
  remarkPlugins: [remarkGfm, remarkMath],
  rehypePlugins: [rehypeKatex],
}
