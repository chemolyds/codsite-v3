import {
  Card,
  CardBody,
  SimpleGrid,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import PersonalLayout from './layout'

export default function PersonalDashboard() {
  return (
    <PersonalLayout
      title="Personal Dashboard"
      description="Your persosnal CODS dashboard"
      heading="Dashboard"
    >
      <StatGroup>
        <Stat>
          <StatLabel>Participations</StatLabel>
          <StatNumber>10</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Diplomas</StatLabel>
          <StatNumber>3</StatNumber>
        </Stat>
      </StatGroup>
    </PersonalLayout>
  )
}
