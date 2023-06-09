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
  //{ value: 'Bronze', label: 'Bronze' },
  //{ value: 'Silver', label: 'Silver' },
  //{ value: 'Gold', label: 'Gold' },
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
    description: 'Notes on Clayden Organic Chemistry, by CODStaff',
    link: 'https://docs.google.com/document/d/e/2PACX-1vRW1bZc-38iNT3fPRcQslL-pA1GNlpO9UifFA2J7T1HOpDPiqcSVWV2tFJu-PQYHQa6SmARu_fWNicG/pub',
    tags: ['Silver', 'Gold', 'Organic'],
  },
  {
    name: 'CODSNotes: Organic Part II',
    description: 'Notes on Clayden Organic Chemistry, by CODStaff',
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
    tags: ['Gold', 'Organic', 'Problem Set'],
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
    description: 'Extremely large file containing advanced organic chemistry problems',
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
    description: 'Compilation of every CODS Original POTD',
    link: 'https://docs.google.com/document/d/1LxA8xap-O20o3zdQSDub9lRHUPocsjO18QxIhbe6vcE/edit?usp=sharing',
    tags: ['Silver', 'Gold', 'General', 'Physical', 'Organic', 'Inorganic', 'Problem Set'],
  },
  {
    name: 'USNCO Exams',
    description: 'Link to U.S. National Chemistry Olympiad exams',
    link: 'https://www.acs.org/content/acs/en/education/students/highschool/olympiad/prepare-for-exams.html',
    tags: ['Bronze', 'Silver', 'General', 'USNCO', 'Problem Set'],
  },
  {
    name: 'USNCO Quizzes',
    description: 'Problem base of USNCO exams, sorted by topic',
    link: 'https://usnco-quizzes.web.app/',
    tags: ['Bronze', 'Silver', 'General', 'USNCO', 'Problem Set'],
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
    name: 'Master Organic Chemistry',
    description: 'Free summary sheets on organic chemistry',
    link: 'https://www.masterorganicchemistry.com/summary-sheets/',
    tags: ['Silver', 'Organic'],
  },
  {
    name: 'Richard Thornley',
    description: 'A funner way to learn A-level/IB chemistry',
    link: 'https://www.youtube.com/user/richthornley/featured',
    tags: ['Bronze', 'General', 'Analytical', 'YouTube'],
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
    link: 'https://youtube.com/playlist?list=PL0o_zxa4K1BVWq4vvQWwdb-hThAoIkBiR',
    tags: ['Silver', 'Organic'],
  },
  {
    name: 'CODS Youtube',
    description: 'Official CODS Youtube with Staff Lectures',
    link: 'https://www.youtube.com/CODSYoutube',
    tags: ['Bronze', 'Silver', 'General', 'Organic', 'USNCO', 'Problem Set', 'YouTube'],
  },
  {
    name: 'Chemistry By Design',
    description: 'Excellent resource for learning new reactions by doing total synthesis problems.',
    link: 'https://chemistrybydesign.oia.arizona.edu/',
    tags: ['Gold', 'Organic', 'Problem Set'],
  },
  {
    name: 'Organic Chemistry Data',
    description: 'Extensive network of organic resources and some laboratory resources.',
    link: 'https://organicchemistrydata.org/',
    tags: ['Bronze', 'Silver', 'Gold', 'Organic', 'Analytical'],
  },
  {
    name: 'Spectral Database for Organic Chemistry',
    description: 'Comprehensive organic database including NS, CNMR, HNMR, IR, Raman, and ESR spectroscopy.',
    link: 'https://sdbs.db.aist.go.jp/sdbs/cgi-bin/cre_index.cgi',
    tags: ['Silver', 'Gold', 'Analytical'],
  },
  {
    name: 'Sigma Aldrich Product Search',
    description: 'Accurate information on the properties of any chemical.',
    link: 'https://www.sigmaaldrich.com/US/en',
    tags: ['Bronze', 'Silver', 'Gold', 'General', 'Analytical'],
  },
  {
    name: 'Sigma Aldrich IR Spectroscopy Table',
    description: 'Easy to understand IR spectroscopy sheet.',
    link: 'https://www.sigmaaldrich.com/US/en/technical-documents/technical-article/analytical-chemistry/photometry-and-reflectometry/ir-spectrum-table',
    tags: ['Silver', 'Gold', 'Analytical'],
  },
  {
    name: 'Allery Chemistry',
    description: 'Introductory chemistry explained simply',
    link: 'https://www.youtube.com/@AlleryChemistry/videos',
    tags: ['Bronze', 'General']
  },
  {
    name: 'Zumdahl Chemistry',
    description: 'Recommended beginner  general chemistry textbook',
    link: 'https://www.amazon.com/s?k=zumdahl+chemistry&i=stripbooks&crid=3W0FQB4GGS4EN&sprefix=zumdahl+chemistry%2Cstripbooks%2C116&ref=nb_sb_noss_2',
    tags: ['Bronze', 'General', 'Physical', 'Textbook']
  },
  {
    name: 'Atkins Chemical Principles: A Quest for Insight',
    description: 'Recommended non-beginner general chemistry textbook',
    link: 'https://www.amazon.com/s?k=atkins+chemical+principles&i=stripbooks&crid=UO9AAW27T69Y&sprefix=atkins+chemical+principles%2Cstripbooks%2C126&ref=nb_sb_noss_1',
    tags: ['Bronze', 'Silver', 'General', 'Physical', 'Inorganic', 'Textbook']
  },
  {
    name: 'Klein Organic Chemistry',
    description: 'Recommended beginner organic chemistry textbook',
    link: 'https://www.amazon.com/s?k=%27Organic+Chemistry%27+Textbook+by+David+Klein+4th+Edition&i=stripbooks&crid=E0ICJWCOK5CZ&sprefix=organic+chemistry%27+textbook+by+david+klein+4th+edition%2Cstripbooks%2C106&ref=nb_sb_noss',
    tags: ['Silver', 'Organic', 'Textbook']
  },
  {
    name: 'Clayden Organic Chemistry',
    description: 'Recommended non-beginner organic chemistry textbook',
    link: 'https://www.amazon.com/s?k=Organic+Chemistry+Clayden&i=stripbooks&crid=53PE1VMQGDYI&sprefix=organic+chemistry+clayden%2Cstripbooks%2C99&ref=nb_sb_noss_1',
    tags: ['Silver', 'Gold', 'Organic', 'Textbook']
  }
]
