import { ChakraMdxComponents } from '@/components/ChakraMdx'
import Layout from '@/components/layout'
import { getAllFaqsIds, getFaqData } from '@/lib/faqs'
import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Link from 'next/link'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

export default function Faq({ mdxSource }: { mdxSource: any }) {
  return (
    <Layout title={mdxSource.frontmatter.title} description="faqs">
      <Prose>
        <Flex>
          <Box>
            <h1>{mdxSource.frontmatter.title}</h1>
          </Box>
          <Spacer />
          <Box>
            <Button size="xl" as={Link} href="/faq">
              Back
            </Button>
          </Box>
        </Flex>
        <MDXRemote components={ChakraMdxComponents} {...mdxSource} />
      </Prose>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllFaqsIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const faqData = await getFaqData(params?.id as string)

  // Convert to mdx
  const mdxSource = await serialize(faqData.fileContents, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [rehypeKatex],
    },
  })

  return {
    props: {
      mdxSource,
    },
  }
}
