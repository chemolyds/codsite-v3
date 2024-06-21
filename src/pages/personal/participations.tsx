import {
  Card,
  CardHeader,
  Center,
  Heading,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'
import PersonalLayout from './layout'

export default function PersonalParticipations() {
  return (
    <PersonalLayout
      title="Personal Dashboard"
      description="Your persosnal CODS dashboard"
      heading="Participations"
    >
      <Tabs isFitted size="lg">
        <TabList>
          <Tab>Year</Tab>
          <Tab>Tier</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {[
              ...data
                .reduce((set, comp) => {
                  set.add(comp.year)
                  return set
                }, new Set<number>())
                .values(),
            ]
              .toSorted()
              .toReversed()
              .map((year) => (
                <div key={year}>
                  <Center>
                    <Heading size="md" mb={5}>
                      {year}
                    </Heading>
                  </Center>

                  <SimpleGrid
                    spacing={4}
                    templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                    mb={15}
                  >
                    {data
                      .filter((comp) => comp.year === year)
                      .map((comp) => (
                        <Card key={`${comp.competition} ${comp.year}`}>
                          <CardHeader>
                            <Heading size="sm">
                              {comp.competition} {comp.year}
                            </Heading>
                            <Text>{comp.tier}</Text>
                          </CardHeader>
                        </Card>
                      ))}
                  </SimpleGrid>
                </div>
              ))}
          </TabPanel>
          <TabPanel>
            {['Gold', 'Silver', 'Bronze'].map((tier) => (
              <div key={tier}>
                <Center>
                  <Heading size="md" color={tier} mb={5}>
                    {tier}
                  </Heading>
                </Center>

                <SimpleGrid
                  spacing={4}
                  templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                  mb={15}
                >
                  {data
                    .filter((comp) => comp.tier === tier)
                    .map((comp) => (
                      <Card key={`${comp.competition} ${comp.year}`}>
                        <CardHeader>
                          <Heading size="sm">
                            {comp.competition} {comp.year}
                          </Heading>
                        </CardHeader>
                      </Card>
                    ))}
                </SimpleGrid>
              </div>
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </PersonalLayout>
  )
}

type Competition = {
  competition: string
  year: number
  tier: Tier
}
type Tier = 'Gold' | 'Silver' | 'Bronze'

const data = [
  {
    competition: 'SChO',
    year: 2024,
    tier: 'Gold',
  },
  {
    competition: 'SOCC',
    year: 2024,
    tier: 'Gold',
  },
  {
    competition: 'SOCC',
    year: 2023,
    tier: 'Gold',
  },
  {
    competition: 'WCC',
    year: 2022,
    tier: 'Gold',
  },
  {
    competition: 'SChO',
    year: 2022,
    tier: 'Gold',
  },
  {
    competition: 'WCC',
    year: 2023,
    tier: 'Silver',
  },
  {
    competition: 'ACOT',
    year: 2023,
    tier: 'Silver',
  },
  {
    competition: 'SChO',
    year: 2023,
    tier: 'Silver',
  },
]
