import Layout from '@/components/layout'
import { Link } from '@chakra-ui/next-js'
import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  LinkOverlay,
  Text,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Layout title="Guides" description="List of Guides and common resources">
      <Heading as="h1" textAlign="center" mb="10">
        Guides
      </Heading>

      <Grid templateColumns="repeat(3, 1fr)" gap={8} mt="10">
        {guides.map((guide) => (
          <GridItem key={guide.href}>
            <Card>
              <CardHeader>
                <Heading size="xs" pb="2">
                  <LinkOverlay href={`/guides/${guide.href}`} as={Link}>
                    {guide.title}
                  </LinkOverlay>
                </Heading>
              </CardHeader>
              <CardBody pt="0">{guide.description}</CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Layout>
  )
}

const guides = [
  {
    href: '/intro',
    title: 'Introductory Guide',
    description:
      'Just getting into competitive Chemistry? Read this guide to have a proper start!',
  },
  {
    href: '/intermediate',
    title: 'Intermediate Guide',
    description:
      'Have no idea what IChO Prep problems you should try out? Read this guide!',
  },
  {
    href: '/lab',
    title: 'Laboratory Guide',
    description:
      'Read about how to tackle the laboratory section in competitive chemistry.',
  },
]
