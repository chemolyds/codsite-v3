import {
  Badge,
  Card,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
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
  promoted: false
  award: string
}
type Tier = 'Gold' | 'Silver' | 'Bronze'
const data: Competition[] = [
  {
    competition: 'SChO',
    year: 2024,
    tier: 'Gold',
    rank: 1,
    totalParticipants: 20,
    promoted: false,
    award: "Damper",
  },
  {
    competition: 'SOCC',
    year: 2024,
    tier: 'Bronze',
    rank: 10,
    totalParticipants: 30,
    promoted: false,
    award: "Honors",
  },
  {
    competition: 'SOCC',
    year: 2023,
    tier: 'Gold',
    rank: 5,
    totalParticipants: 25,
    promoted: false,
    award: "High Honors",
  },
  {
    competition: 'WCC',
    year: 2022,
    tier: 'Bronze',
    rank: 2,
    totalParticipants: 15,
    promoted: false,
    award: "Damper",
  },
  {
    competition: 'SChO',
    year: 2022,
    tier: 'Bronze',
    rank: 1,
    totalParticipants: 20,
    promoted: false,
    award: "Damper",
  },
  {
    competition: 'WCC',
    year: 2023,
    tier: 'Silver',
    rank: 3,
    totalParticipants: 10,
    promoted: false,
    award: "Damper",
  },
  {
    competition: 'ACOT',
    year: 2023,
    tier: 'Silver',
    rank: 5,
    totalParticipants: 15,
    promoted: false,
    award: "High Honors",
  },
  {
    competition: 'SChO',
    year: 2023,
    tier: 'Silver',
    rank: 10,
    totalParticipants: 20,
    promoted: false,
    award: "",
  },
]

const competitionOrder = ['ACOT', 'WCC', 'SOCC', 'SChO']