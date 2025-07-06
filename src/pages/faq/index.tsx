import { ChakraMdxComponents, MdxOptions } from '@/components/ChakraMdx'
import Layout from '@/components/layout'
import { getFaqsData } from '@/lib/faqs'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  Link as ChakraLink,
  LinkOverlay,
} from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Prose } from '@nikolovlazar/chakra-ui-prose'

export default function Home({
  allFaqsData,
}: {
  allFaqsData: {
    id: string
    title: string
    mdxSource: any
  }[]
}) {
  return (
    <Layout title="FAQ" description="Frequently Asked Questions">
      <Heading as="h1" textAlign="center" mb="20">
        Frequently Asked Questions
      </Heading>

      <Accordion>
        {allFaqsData.map(({ id, title, mdxSource }) => (
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Heading fontSize="lg">{title}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <ChakraLink color="blue.300" href={`/faq/${id}`}>
                Share
              </ChakraLink>
              <Prose>
                <MDXRemote components={ChakraMdxComponents} {...mdxSource} />
              </Prose>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allFaqsData = await getFaqsData()
  let allFaqsDataWithMdx = []

  for (let i = 0; i < allFaqsData.length; i++) {
    let mdxSource = await serialize(allFaqsData[i].fileContents, {
      parseFrontmatter: true,
      mdxOptions: MdxOptions,
    })

    allFaqsDataWithMdx.push({
      ...allFaqsData[i],
      mdxSource: mdxSource,
    })
  }

  return {
    props: {
      allFaqsData: allFaqsDataWithMdx,
    },
  }
}
