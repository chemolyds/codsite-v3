import {
  Badge,
  Card,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import { sampleData as data } from '@/lib/dashboard'
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
        {data
          .sort((a: Competition, b: Competition) => {
            if (a.year !== b.year) {
              return b.year - a.year
            } else {
              return competitionOrder.indexOf(b.competition) - competitionOrder.indexOf(a.competition)
            }
          })
          .map((comp) => {
            if (comp.rank > 3 && comp.award == "") return
            return (
              <Card key={`${comp.competition}-${comp.year}`}>
                <CardHeader>
                  <Flex direction="row" align="center" justify="space-between" mb={2}>
                    <Heading size="md">{comp.competition} {comp.year}</Heading>
                    <Badge variant={comp.tier.toLowerCase()}>{comp.tier}</Badge>
                  </Flex>
                  <Stack direction="row">
                    {comp.award != "" && (
                      <Badge>{comp.award}</Badge>
                    )}
                    {comp.rank == 1 && (
                      <Badge>1st Place</Badge>
                    )}
                    {comp.rank == 2 && (
                      <Badge>2nd Place</Badge>
                    )}
                    {comp.rank == 3 && (
                      <Badge>3rd Place</Badge>
                    )}
                  </Stack>
                </CardHeader>
              </Card>
            )
          })}
      </SimpleGrid>
    </PersonalLayout>
  )
}
type Competition = {
  competition: string
  year: number
  tier: Tier
  rank: number
  totalParticipants: number
  tierChange: number
  award: string
}
type Tier = 'Gold' | 'Silver' | 'Bronze'
const competitionOrder = ['ACOT', 'WCC', 'SOCC', 'SChO']