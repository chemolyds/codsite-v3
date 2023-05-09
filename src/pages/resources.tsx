import Layout from '@/components/layout'
import { ResourceList, TagOption, TagOptions } from '@/lib/resources'
import {
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  LinkOverlay,
  Tag,
  Wrap,
} from '@chakra-ui/react'
import { GroupBase, MultiValue, Select } from 'chakra-react-select'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Resources() {
  const [selectedTags, setSelectedTags] = useState<MultiValue<TagOption>>([])

  return (
    <Layout
      title="Resources"
      description="Compilation of Resources from both staff and the community"
    >
      <Heading as="h1" textAlign="center" mb="10">
        Resources
      </Heading>

      <Select<TagOption, true, GroupBase<TagOption>>
        isMulti
        placeholder="Filter Tags"
        options={TagOptions}
        value={selectedTags}
        onChange={setSelectedTags}
      />

      <Grid templateColumns="repeat(2, 1fr)" gap={8} mt="10">
        <AnimatePresence>
          {ResourceList.filter(
            (resource) =>
              selectedTags.length === 0 ||
              selectedTags.some((tagOption) =>
                resource.tags?.includes(tagOption.value)
              )
          ).map((resource) => (
            <GridItem
              key={resource.link}
              as={motion.div}
              layout
              layoutId={resource.link}
            >
              <Card>
                <CardHeader>
                  <Heading size="xs" pb="2">
                    <LinkOverlay href={resource.link} as={Link} isExternal>
                      {resource.name}
                    </LinkOverlay>
                  </Heading>
                  <Wrap>
                    {resource.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Wrap>
                </CardHeader>
                <CardBody pt="0">{resource.description}</CardBody>
              </Card>
            </GridItem>
          ))}
        </AnimatePresence>
      </Grid>
    </Layout>
  )
}
