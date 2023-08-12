import { ChakraMdxComponents, MdxOptions } from '@/components/ChakraMdx'
import Layout from '@/components/layout'
import TableOfContents from '@/components/tableOfContents'
import { getAllCoursesIds, getCourseData, getCourseTableOfContents } from '@/lib/courses'
import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Link from 'next/link'

export default function Course({ 
  mdxSource, 
  contents 
}: { 
  mdxSource: any
  contents: {
    title: string,
    id: string,
  }[]
}) {
  return (
    <Layout title={mdxSource.frontmatter.title} description="courses">
      <Prose>sdf
        <Flex>
          <Box>
            <h1>{mdxSource.frontmatter.title}: {mdxSource.frontmatter.description}</h1>
          </Box>
          <Spacer />
          <Box>
            <Button size="xl" as={Link} href="/courses">
              Back
            </Button>
          </Box>
        </Flex>
        <Flex justify="space-between" gap="40px">
          <Box maxWidth="2xl">
            <MDXRemote components={ChakraMdxComponents} {...mdxSource} />
          </Box>
          <TableOfContents contents={contents}></TableOfContents>
        </Flex>
      </Prose>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllCoursesIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const courseData = await getCourseData(params?.section as string, params?.id as string)
  const contents = await getCourseTableOfContents(params?.section as string, params?.id as string)

  // Convert to mdx
  const mdxSource = await serialize(courseData.fileContents, {
    parseFrontmatter: true,
    mdxOptions: MdxOptions,
  })

  return {
    props: {
      mdxSource,
      contents,
    },
  }
}
