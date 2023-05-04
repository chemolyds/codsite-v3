import Layout from '@/components/layout'
import { getAllFaqsIds, getFaqData } from '@/lib/faqs'
import { GetStaticProps, GetStaticPaths } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { Button, Box, Spacer, Flex, LinkOverlay } from '@chakra-ui/react'
import Link from 'next/link'

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
        <MDXRemote {...mdxSource} />
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
  })

  console.log(mdxSource)
  return {
    props: {
      mdxSource,
    },
  }
}
