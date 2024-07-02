export type Competition = {
  competition: string
  year: number
  tier: Tier
  rank: number
  totalParticipants: number
  tierChange: number
  award: string
}

export type Tier = 'Gold' | 'Silver' | 'Bronze'

export type FormattedCompetition = {
  x: string
  y: number
  rank: number
  totalParticipants: number
  tier: string
  competition: string
  year: number
}

export const competitionOrder = ['ACOT', 'WCC', 'SOCC', 'SChO']

export const sampleData: Competition[] = [
  {
    competition: 'SChO',
    year: 2024,
    tier: 'Gold',
    rank: 4,
    totalParticipants: 10,
    tierChange: 0,
    award: "Honors",
  },
  {
    competition: 'SOCC',
    year: 2024,
    tier: 'Gold',
    rank: 4,
    totalParticipants: 12,
    tierChange: 0,
    award: "High Honors",
  },
  {
    competition: 'SChO',
    year: 2023,
    tier: 'Silver',
    rank: 2,
    totalParticipants: 20,
    tierChange: 1,
    award: "Damper",
  },
  {
    competition: 'SOCC',
    year: 2023,
    tier: 'Gold',
    rank: 7,
    totalParticipants: 7,
    tierChange: -1,
    award: "",
  },
  {
    competition: 'WCC',
    year: 2023,
    tier: 'Silver',
    rank: 3,
    totalParticipants: 10,
    tierChange: 1,
    award: "Damper",
  },
  {
    competition: 'ACOT',
    year: 2023,
    tier: 'Silver',
    rank: 5,
    totalParticipants: 15,
    tierChange: 0,
    award: "High Honors",
  },
  {
    competition: 'SChO',
    year: 2022,
    tier: 'Bronze',
    rank: 1,
    totalParticipants: 20,
    tierChange: 1,
    award: "Damper",
  },
  {
    competition: 'WCC',
    year: 2022,
    tier: 'Bronze',
    rank: 15,
    totalParticipants: 40,
    tierChange: 0,
    award: "Honors",
  },
]
