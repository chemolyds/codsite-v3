import Layout from '@/components/layout'
import CodsLogo from '@/components/CodsLogo'
import { getCoursesData, getSectionNames } from '@/lib/courses'
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Spacer,
  useColorMode,
} from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

export default function Home({
  allCoursesData,
}: {
  allCoursesData: {
    sectionTitle: string
    sectionData: {
      id: number
      title: string
      description: string
    }[]
  }[]
}) {
  const { colorMode } = useColorMode()

  return (
    <Layout title="Courses" description="CODS Courses" maxW="container.md">
      <Heading as="h1" textAlign="center">
        Courses
      </Heading>
      <Heading as="h2" size="sm" textAlign="center" mb="10">
        Annotated by Kwanwoo Park
      </Heading>
      {allCoursesData.map(({ sectionTitle, sectionData }) => (
        <TableContainer key={sectionTitle}>
          <Table variant="simple" borderRadius="md">
            <Thead>
              <Tr>
                <Th
                  borderTopRadius="md"
                  border="none"
                  fontSize="xl"
                  fontWeight="bold"
                  paddingY="4"
                  background={
                    colorMode === 'light' ? 'gray.100' : 'rgba(45, 55, 72, 0.4)'
                  }
                >
                  {sectionTitle.replaceAll('_', ' ')}
                </Th>
              </Tr>
            </Thead>
            <Tbody borderTopRadius="md">
              {sectionData.map(({ id, title, description }) => (
                <Tr key={id}>
                  <Td border="none" fontSize="md">
                    <Link href={`/courses/${sectionTitle}/${id}`}>
                      <Flex alignItems="center" sx={{ gap: '8px' }}>
                        <CodsLogo
                          fill={colorMode === 'light' ? 'black' : 'white'}
                          width="28px"
                          height="28px"
                          display="inline"
                        />
                        {title}: {description}
                      </Flex>
                    </Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <br />
          <br />
        </TableContainer>
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allSectionTitles = await getSectionNames()
  let allCoursesData: any[] = []
  for (let section of allSectionTitles) {
    allCoursesData.push({
      sectionTitle: section,
      sectionData: await getCoursesData(section),
    })
  }
  return {
    props: {
      allSectionTitles,
      allCoursesData,
    },
  }
}
