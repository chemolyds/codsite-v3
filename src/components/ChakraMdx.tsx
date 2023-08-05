//import { Link, LinkProps } from '@chakra-ui/next-js'
import {
  Box,
  BoxProps,
  Flex,
  Link,
  Table,
  TableContainer,
  TableProps,
  Tbody,
  Td,
  Text,
  TextProps,
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
  Red: (props: { children: JSX.Element }) => (
    <span style={{ color: '#9b1111' }} {...props} />
  ),
  Green: (props: { children: JSX.Element }) => (
    <span style={{ color: '#235310' }} {...props} />
  ),
  Blue: (props: { children: JSX.Element }) => (
    <span style={{ color: '#285fc0' }} {...props} />
  ),
}

export const MdxOptions = {
  remarkPlugins: [remarkGfm, remarkMath],
  rehypePlugins: [rehypeKatex],
}
