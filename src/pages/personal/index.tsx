import {
  Box,
  Heading,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import PersonalLayout from './layout'
import dynamic from "next/dynamic"
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function PersonalDashboard() {
  const formatData = (data: Competition[]) => {
    return data
      .map((comp: Competition) => {
        let yOffset = 0
        if (comp.tier === 'Gold') {
          yOffset += 200
        } else if (comp.tier === 'Silver') {
          yOffset += 100
        }
        return {
          x: comp.competition + ' ' + comp.year,
          y: yOffset + (1 - comp.rank / comp.totalParticipants) * 100,
          rank: comp.rank,
          totalParticipants: comp.totalParticipants,
          tier: comp.tier,
          competition: comp.competition,
          year: comp.year,
        }
      })
      .sort((a: FormattedCompetition, b: FormattedCompetition) => {
        if (a.year !== b.year) {
          return a.year - b.year
        } else {
          return competitionOrder.indexOf(a.competition) - competitionOrder.indexOf(b.competition)
        }
      })
  }

  const options = {
    chart: {
      id: "basic-bar",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: "category" as const,
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      min: 0,
      max: 300,
      labels: {
        formatter: function (value: number) {
          if (value <= 100) return value.toString()
          else if (value <= 200) return (value - 100).toString()
          else return (value - 200).toString()
        }
      },
      title: {
        text: "Rankings Percentile",
      },
    },
    annotations: {
      yaxis: [
        {
          label: {
            text: " "
          },
          y: 0,
          y2: 100,
          fillColor: "#CD7F32"
        },
        {
          label: {
            text: " "
          },
          y: 100,
          y2: 200,
          fillColor: "#C0C0C0"
        },
        {
          label: {
            text: " "
          },
          y: 200,
          y2: 300,
          fillColor: "#FFD700"
        },
      ],
    },
    tooltip: {
      custom: function({series, seriesIndex, dataPointIndex, w}: {series: number[], seriesIndex: number, dataPointIndex: number, w: any}) {
        var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
        let yOffset = 0;
        if (data.tier == 'Silver') yOffset += 100;
        else if (data.tier == 'Gold') yOffset += 200;
        return `
          <div style="padding: 10px;">
            <p style="font-size: 18px; font-weight: bold;">${data.x}</p>
            <ul style="list-style-type: none;">
              <li>Top <b>${Math.floor(data.y - yOffset)}%</b> in ${data.tier} tier</li>
              <li>Ranked ${data.rank} out of ${data.totalParticipants} total participants</li>
            </ul>
          </div>`;
      },
    },
    markers: {
      size: 5,
      shape: "circle" as ApexMarkerShape,
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
  }

  const series = [
    {
      name: "CODS Competition Rankings",
      data: formatData(data),
    },
  ]

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
      <Heading size="md" mt={5}>Rankings</Heading>
      <Chart
        options={options}
        series={series}
        type="line"
        width="100%"
        height="200"
      />
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
type FormattedCompetition = {
  x: string
  y: number
  rank: number
  totalParticipants: number
  tier: string
  competition: string
  year: number
}
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