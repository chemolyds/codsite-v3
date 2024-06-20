import {
  Badge,
  Card,
  CardHeader,
  Heading,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import PersonalLayout from './layout'

export default function PersonalDiplomas() {
  return (
    <PersonalLayout
      title="Personal Dashboard"
      description="Your persosnal CODS dashboard"
      heading="Diplomas"
    >
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {data.map((diploma) => (
          <Card key={diploma.competition}>
            <CardHeader>
              <Heading size="md">{diploma.competition}</Heading>
              <Stack direction="row">
                {diploma.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </Stack>
            </CardHeader>
          </Card>
        ))}
      </SimpleGrid>
    </PersonalLayout>
  )
}

const data = [
  {
    competition: 'SChO 2024',
    tags: ['Gold', '1st Place'],
  },
  {
    competition: 'SChO 2024',
    tags: ['Gold', '1st Place'],
  },
  {
    competition: 'SChO 2024',
    tags: ['Gold', '1st Place'],
  },
]
