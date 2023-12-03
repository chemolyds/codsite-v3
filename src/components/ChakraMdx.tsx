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
  Image,
  ImageProps,
  Center,
  Heading,
  HeadingProps,
} from '@chakra-ui/react'
import { ReactNode } from 'react';
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

interface HeadingWithIdProps {
  children: ReactNode
}

// Create id for headings in markdown for table of contents
const HeadingWithId: React.FC<HeadingWithIdProps> = ({children}) => {
  if (!children) {
    return (
      <Heading as='h2'>
        {children}
      </Heading>
    )
  }

  // Cleans up heading for id
  // Removes subsection number, special characters and converts space to dash
  const id = children
    .toString()
    .replace(/^[0-9.]+\s*/, '')
    .trim()
    .toLowerCase()
    .replace(/[\s]+/g, '-')
    .replace(/[^\w-]+/g, '')

  return (
    <Heading as='h2' id={id}>
      {children}
    </Heading>
  )
}

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
  h2: (props: HeadingWithIdProps) => <HeadingWithId {...props} />
}

export const MdxOptions = {
  remarkPlugins: [remarkGfm, remarkMath],
  rehypePlugins: [rehypeKatex],
}
