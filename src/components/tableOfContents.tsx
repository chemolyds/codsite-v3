import { 
  Box, 
  ListItem, 
  UnorderedList, 
  Link,
  Heading,
} from '@chakra-ui/react'
import ScrollLink from './ScrollLink'

export default function tableOfContents({
  contents,
}: {
  contents: {
    title: string,
    id: string,
  }[]
}) {
  return (
    <Box display={{ base: "none", lg: "inline-block"}} position="sticky" top="80px" maxHeight="600px" p={1}>
      <Heading as="h4">
        Table of Contents
      </Heading>
      <UnorderedList 
        margin={0} 
        style={{ paddingLeft: '0' }}
      >
        {contents.map(({title, id}) => (
          <ListItem 
            key={id} 
            listStyleType="none" 
            style={{ margin: "0", padding: "10px" }}
            _hover={{
              background: "blue",
              color: "teal.500",
            }}  
          >
            <a href={`#${id}`}>{title}</a>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}