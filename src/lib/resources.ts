export type Tag =
  | 'Bronze'
  | 'Silver'
  | 'Gold'
  | 'General'
  | 'Physical'
  | 'Analytical'
  | 'Inorganic'
  | 'Organic'
  | 'Textbook'
  | 'Problem Set'
  | 'USNCO'
  | 'YouTube'

export type Resource = {
  name: string
  description: string
  link: string
  tags: Tag[]
}

export const ResourceList: Resource[] = [
  {
    name: 'CODSNotes: General',
    description: 'Notes on Atkins: Chemical Principles, by CODStaff',
    link: 'https://drive.google.com/drive/folders/195kcNDwljvw1w5ZKVWzpE7LCdbvwQzVL?usp=sharing',
    tags: ['Bronze', 'Silver', 'General', 'Physical', 'USNCO'],
  },
  {
    name: 'CODSNotes: Organic Part I',
    description: 'Notes on Clayden Organic Chemistry, by CODSstaff',
    link: 'https://docs.google.com/document/d/e/2PACX-1vRW1bZc-38iNT3fPRcQslL-pA1GNlpO9UifFA2J7T1HOpDPiqcSVWV2tFJu-PQYHQa6SmARu_fWNicG/pub',
    tags: ['Silver', 'Gold', 'Organic'],
  },
  {
    name: 'CODSNotes: Organic Part II',
    description: 'Notes on Clayden Organic Chemistyr, by CODStaff',
    link: 'https://docdro.id/QKJYHub',
    tags: ['Silver', 'Gold', 'Organic'],
  },
  {
    name: 'ChemGuide',
    description: 'UK resource with exceptional inorganic chemistry',
    link: 'https://www.chemguide.co.uk',
    tags: ['Bronze', 'Silver', 'General', 'Inorganic', 'Analytical'],
  },
  {
    name: 'Chem LibreTexts',
    description: 'Open source chemistry textbooks',
    link: 'https://chem.libretexts.org',
    tags: [
      'Bronze',
      'Silver',
      'Gold',
      'General',
      'Physical',
      'Inorganic',
      'Organic',
      'Analytical',
      'Textbook',
    ],
  },
  {
    name: 'Organic Chemistry Problems',
    description: 'Huge collection of organic chemistry problems',
    link: 'https://www.organicchemproblems.com',
    tags: ['Bronze', 'Silver', 'Gold', 'Organic', 'Problem Set'],
  },
]
