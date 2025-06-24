import { ChakraMdxComponents, MdxOptions } from '@/components/ChakraMdx'
import Layout from '@/components/layout'
import { Prose } from '@/components/ui/prose'
import {
  getAllCountryGuidesIds,
  getCountryGuideData,
} from '@/lib/countryGuides'
import { Heading } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

export default function CountryGuide({ mdxSource }: { mdxSource: any }) {
  return (
    <Layout
      title={mdxSource.frontmatter.title}
      description={mdxSource.frontmatter.description}
    >
      <Heading as="h1" textAlign="center" mb={10}>
        {mdxSource.frontmatter.title}
      </Heading>
      <Prose>
        <MDXRemote components={ChakraMdxComponents} {...mdxSource} />
      </Prose>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllCountryGuidesIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const countryGuideData = await getCountryGuideData(params?.id as string)

  // Convert to mdx
  const mdxSource = await serialize(countryGuideData.fileContents, {
    parseFrontmatter: true,
    mdxOptions: MdxOptions,
  })

  return {
    props: {
      mdxSource,
    },
  }
}
