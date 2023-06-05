import { OptionBase } from 'chakra-react-select'

export type ResourceTags =
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

export interface TagOption extends OptionBase {
  value: ResourceTags
  label: ResourceTags
}

export const TagOptions: { value: ResourceTags; label: ResourceTags }[] = [
  { value: 'Bronze', label: 'Bronze' },
  { value: 'Silver', label: 'Silver' },
  { value: 'Gold', label: 'Gold' },
  { value: 'General', label: 'General' },
  { value: 'Physical', label: 'Physical' },
  { value: 'Analytical', label: 'Analytical' },
  { value: 'Inorganic', label: 'Inorganic' },
  { value: 'Organic', label: 'Organic' },
  { value: 'Textbook', label: 'Textbook' },
  { value: 'Problem Set', label: 'Problem Set' },
  { value: 'USNCO', label: 'USNCO' },
  { value: 'YouTube', label: 'YouTube' },
]

export interface Resource {
  name: string
  description: string
  link: string
  tags: ResourceTags[]
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
  {
    name: 'Evans Advanced Organic Chemistry Notes and Problems',
    description:
      'Extremely large file containing advanced organic notes and problems',
    link: 'https://drive.google.com/file/d/1qa17PJ9HapLMl3yFP0nSO6j9xUZ4Q9th/view?usp=sharing',
    tags: ['Gold', 'Organic', 'Textbook', 'Problem Set'],
  },
  {
    name: 'Evans Selected Organic Chemistry Questions',
    description: 'Advanced organic chemistry problems',
    link: 'https://drive.google.com/file/d/1Z_GFx___qjgGIjIdDtUP82pzjf3_gajQ/view?usp=sharing',
    tags: ['Gold', 'Organic', 'Problem Set'],
  },
  {
    name: 'Various Topic Notes',
    description: 'Short notes on assorted chemistry topics',
    link: 'https://drive.google.com/drive/folders/17AvQoEmL4Y_UvoObRaa9Bg5h-m_2OIqs?usp=sharing',
    tags: ['Bronze', 'General', 'Physical'],
  },
  {
    name: 'Problem of the Day Archive',
    description: 'Compilation of every CODS POTD',
    link: 'https://docs.google.com/document/d/1LxA8xap-O20o3zdQSDub9lRHUPocsjO18QxIhbe6vcE/edit?usp=sharing',
    tags: ['Silver', 'Gold', 'General', 'Physical', 'Organic', 'Inorganic'],
  },
  {
    name: 'USNCO Exams',
    description: 'Link to U.S. National Chemistry Olympiad Exams',
    link: 'https://www.acs.org/content/acs/en/education/students/highschool/olympiad/prepare-for-exams.html',
    tags: ['Bronze', 'Silver', 'General', 'USNCO', 'Problem Set'],
  },
  {
    name: 'USNCO Quizzes',
    description: 'Problem base of USNCO Exams, sorted by topic',
    link: 'https://usnco-quizzes.web.app/',
    tags: ['Bronze', 'Silver', 'General', 'USNCO', 'Problem Set'],
  },
  {
    name: 'Organic Chemistry Data',
    description: 'A collection of information and syntheses',
    link: 'https://organicchemistrydata.org/',
    tags: ['Gold', 'Organic'],
  },
  {
    name: 'SynArchive',
    description: 'A database of organic synthesis',
    link: 'https://synarchive.com/',
    tags: ['Gold', 'Organic'],
  },
  {
    name: 'Fukuyama group meeting problems',
    description: 'A collection of difficult organic chemistry problems',
    link: 'http://www.ps.nagoya-u.ac.jp/lab_pages/natural_products/problem-e.html',
    tags: ['Gold', 'Organic', 'Problem Set'],
  },
  {
    name: 'Chemistry by Design',
    description: 'Step by step synthesis practice, using pharmaceutical drugs',
    link: 'http://chemistrybydesign.oia.arizona.edu/app/',
    tags: ['Silver', 'Gold', 'Organic', 'Problem Set'],
  },
  {
    name: 'Master Organic Chemistry',
    description: 'Free summary sheets on organic chemistry',
    link: 'https://www.masterorganicchemistry.com/summary-sheets/',
    tags: ['Bronze', 'Organic'],
  },
  {
    name: 'Richard Thornley',
    description: 'A funner way to learn A-level/IB chemistry',
    link: 'https://www.youtube.com/user/richthornley/featured',
    tags: ['Bronze', 'Silver', 'General', 'Analytical', 'YouTube'],
  },
  {
    name: 'Scott Milam',
    description: 'USNCO Exam Walkthroughs',
    link: 'https://www.youtube.com/@APphyzicks/search?query=usnco',
    tags: ['Bronze', 'Silver', 'General', 'USNCO', 'Problem Set', 'YouTube'],
  },
  {
    name: 'Organic Chemistry Tutor',
    description: 'Organic Chemistry Concept Explanations',
    link: 'https://www.youtube.com/c/TheOrganicChemistryTutor/featured',
    tags: ['Bronze', 'Silver', 'Organic'],
  },
]
