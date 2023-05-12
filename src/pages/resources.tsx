import Layout from '@/components/layout'
import {
  Resource,
  ResourceList,
  TagOption,
  TagOptions,
  ResourceTags,
} from '@/lib/resources'
import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Checkbox,
  CheckboxGroup,
  Grid,
  GridItem,
  Heading,
  LinkOverlay,
  Stack,
  Tag,
  Wrap,
} from '@chakra-ui/react'
import { GroupBase, MultiValue, Select } from 'chakra-react-select'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Resources() {
  const [selectedTags, setSelectedTags] = useState<MultiValue<TagOption>>([])
  const [selectedTiers, setSelectedTiers] = useState<ResourceTags[]>([
    'Bronze',
    'Silver',
    'Gold',
  ])

  function filter(resource: Resource) {
    // Filter out tiers first
    if (!selectedTiers.some((tier) => resource.tags?.includes(tier)))
      return false

    // Then filter by tag
    return (
      selectedTags.length === 0 ||
      selectedTags.some((tagOption) => resource.tags?.includes(tagOption.value))
    )
  }

  return (
    <Layout
      title="Resources"
      description="Compilation of Resources from both staff and the community"
    >
      <Heading as="h1" textAlign="center" mb="10">
        Resources
      </Heading>

      <Center my="3">
        <CheckboxGroup
          colorScheme="brand"
          size="lg"
          defaultValue={selectedTiers}
          onChange={(tiers: ResourceTags[]) => setSelectedTiers(tiers)}
        >
          <Stack spacing={[1, 5]} direction={['column', 'row']}>
            <Checkbox value="Bronze">Bronze</Checkbox>
            <Checkbox value="Silver">Silver</Checkbox>
            <Checkbox value="Gold">Gold</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Center>

      <Select<TagOption, true, GroupBase<TagOption>>
        isMulti
        placeholder="Filter Tags"
        options={TagOptions}
        value={selectedTags}
        onChange={setSelectedTags}
      />

      <Grid templateColumns="repeat(2, 1fr)" gap={8} mt="10">
        <AnimatePresence>
          {ResourceList.filter((resource) => filter(resource)).map(
            (resource) => (
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
            )
          )}
        </AnimatePresence>
      </Grid>
    </Layout>
  )
}
