import {
  AspectRatio,
  Heading,
  Link,
  Table,
  TableRootProps,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

interface HeadingWithIdProps {
  children: ReactNode
}

// Create id for headings in markdown for table of contents
const HeadingWithId: React.FC<HeadingWithIdProps> = ({ children }) => {
  if (!children) {
    return <Heading as="h2">{children}</Heading>
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
    <Heading as="h2" id={id}>
      {children}
    </Heading>
  )
}

export const ChakraMdxComponents = {
  Link: Link,
  table: (props: TableRootProps) => <Table.Root {...props} />,
  thead: Table.Header,
  tr: Table.Row,
  th: Table.ColumnHeader,
  tbody: Table.Body,
  td: Table.Cell,
  Red: (props: { children: JSX.Element }) => (
    <span style={{ color: '#9b1111' }} {...props} />
  ),
  Green: (props: { children: JSX.Element }) => (
    <span style={{ color: '#235310' }} {...props} />
  ),
  Blue: (props: { children: JSX.Element }) => (
    <span style={{ color: '#285fc0' }} {...props} />
  ),
  h2: (props: HeadingWithIdProps) => <HeadingWithId {...props} />,
  Youtube: (props: { youtubeId: string; title: string }) => (
    <AspectRatio ratio={16 / 9}>
      <iframe
        title={props.title}
        src={`https://www.youtube.com/embed/${props.youtubeId}?feature=oembed`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      />
    </AspectRatio>
  ),
}

export const MdxOptions = {
  remarkPlugins: [remarkGfm, remarkMath],
  rehypePlugins: [rehypeKatex],
}
