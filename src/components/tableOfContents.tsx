import {
  Box,
  ListItem,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react'
import ScrollLink from './scrollLink'

export default function tableOfContents({
  contents,
}: {
  contents: {
    title: string
    id: string
  }[]
}) {
  return (
    <Box
      display={{ base: 'none', lg: 'block' }}
      position="sticky"
      maxHeight="200px"
      top="120px"
      width="230px"
    >
      <Box
        px={6}
        py={5}
        borderRadius="lg"
        bg={useColorModeValue('white', 'gray.800')}
      >
        <h4 style={{ marginTop: '0' }}>Table of Contents</h4>
        <UnorderedList ml={0} style={{ padding: '0' }}>
          {contents?.map(({ title, id }) => (
            <ListItem
              key={id}
              listStyleType="none"
              style={{ margin: '0', padding: '10px 0' }}
            >
              <ScrollLink id={id} offset={100}>
                {title}
              </ScrollLink>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  )
}
