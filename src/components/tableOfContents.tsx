import { Box, List } from '@chakra-ui/react'
import ScrollLink from './scrollLink'
import { useColorModeValue } from './ui/color-mode'

export default function TableOfContents({
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
      width="sm"
    >
      <Box
        px={6}
        py={5}
        borderRadius="lg"
        bg={useColorModeValue('white', 'gray.800')}
      >
        <h4 style={{ marginTop: '0' }}>Table of Contents</h4>
        <List.Root ml={0} style={{ padding: '0' }}>
          {contents?.map(({ title, id }) => (
            <List.Item
              key={id}
              listStyleType="none"
              style={{ margin: '0', padding: '10px 0' }}
            >
              <ScrollLink id={id} offset={100}>
                {title}
              </ScrollLink>
            </List.Item>
          ))}
        </List.Root>
      </Box>
    </Box>
  )
}
