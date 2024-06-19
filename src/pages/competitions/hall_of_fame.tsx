import Layout from '@/components/layout'
import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

export default function HallOfFame() {
  return (
    <Layout title="Hall of Fame" description="Listing of all competitors">
      <Heading as="h1" textAlign="center" mb="10">
        Hall of Fame
      </Heading>

      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Current Tier</Th>
              <Th>1sts</Th>
              <Th>2nds</Th>
              <Th>3rds</Th>
              <Th>High Honors</Th>
              <Th>Honors</Th>
              <Th>Participations</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((contestant) => (
              <Tr key={contestant.cin}>
                <Td>{contestant.name}</Td>
                <Td>{contestant.tier}</Td>
                <Td>{contestant.firsts}</Td>
                <Td>{contestant.seconds}</Td>
                <Td>{contestant.thirds}</Td>
                <Td>{contestant.highHonors}</Td>
                <Td>{contestant.honors}</Td>
                <Td>{contestant.participations}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  )
}

const data = [
  {
    cin: 12345,
    name: 'Jerdan1980',
    tier: 'Gold',
    firsts: 1,
    seconds: 2,
    thirds: 3,
    highHonors: 4,
    honors: 5,
    participations: 16,
  },
  {
    cin: 12345,
    name: 'Jerdan1980',
    tier: 'Gold',
    firsts: 1,
    seconds: 2,
    thirds: 3,
    highHonors: 4,
    honors: 5,
    participations: 16,
  },
  {
    cin: 12345,
    name: 'Jerdan1980',
    tier: 'Gold',
    firsts: 1,
    seconds: 2,
    thirds: 3,
    highHonors: 4,
    honors: 5,
    participations: 16,
  },
]
