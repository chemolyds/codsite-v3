import Layout from '@/components/layout'
import { Link } from '@chakra-ui/next-js'
import {
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Stack,
} from '@chakra-ui/react'

export default function PersonalLayout({
  children,
  title,
  description,
  maxW = 'container.xl',
  heading,
}: {
  children: React.ReactNode
  title: string
  description: string
  maxW?: string
  heading: string
}) {
  return (
    <Layout title={title} description={description} maxW={maxW}>
      <Heading as="h1" textAlign="center" mb="10">
        {heading}
      </Heading>

      <Grid
        templateColumns={{ base: 'repeate(1, 1fr)', md: 'repeat(5, 1fr)' }}
        gap={4}
      >
        <GridItem key="pages">
          <Card>
            <CardBody>
              <Stack direction="column">
                <Link href="/personal" color="blue.400">
                  Dashboard
                </Link>
                <Link href="/personal/diplomas" color="blue.400">
                  Diplomas
                </Link>
                <Link href="/personal/participations" color="blue.400">
                  Participations
                </Link>
              </Stack>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem colSpan={4} key="view">
          {children}
        </GridItem>
      </Grid>
    </Layout>
  )
}
