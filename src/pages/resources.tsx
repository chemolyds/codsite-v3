import Layout from '@/components/layout'
import {
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  LinkOverlay,
  Tag,
  HStack,
  SimpleGrid,
  Wrap,
} from '@chakra-ui/react'
import Link from 'next/link'
import { ResourceList } from '@/lib/resources'

export default function Resources() {
  return (
    <Layout
      title="Resources"
      description="Compilation of Resources from both staff and the community"
    >
      <Heading as="h1" textAlign="center" mb="10">
        Resources
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        {ResourceList.map((resource) => (
          <GridItem key={resource.link}>
            <Card>
              <CardHeader>
                <Heading size="xs" pb="2">
                  <LinkOverlay href={resource.link} as={Link} isExternal>
                    {resource.name}
                  </LinkOverlay>
                </Heading>
                <Wrap>
                  {resource.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </Wrap>
              </CardHeader>
              <CardBody pt="0">{resource.description}</CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Layout>
  )
}
