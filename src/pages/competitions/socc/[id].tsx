import { ChakraMdxComponents } from '@/components/ChakraMdx'
import Layout from '@/components/layout'
import { getAllCompsIds, getCompData } from '@/lib/comps'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

export default function Socc({ mdxSource }: { mdxSource: any }) {
  return (
    <Layout
      title={mdxSource.frontmatter.title}
      description={mdxSource.frontmatter.description}
    >
      <Prose>
        <MDXRemote components={ChakraMdxComponents} {...mdxSource} />
      </Prose>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllCompsIds('socc')
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const compData = await getCompData('socc', params?.id as string)

  // Convert to mdx
  const mdxSource = await serialize(compData.fileContents, {
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
