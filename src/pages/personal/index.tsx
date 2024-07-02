import {
  Heading,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import PersonalLayout from './layout'
import { Competition, FormattedCompetition, competitionOrder, sampleData as data } from '@/lib/dashboard'
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
        show: false,
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
        style={{ marginLeft: '20px' }}
      />
    </PersonalLayout>
  )
}
