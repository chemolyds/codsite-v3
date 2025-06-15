'use client'

import Layout from '@/components/layout'
import {
  Resource,
  ResourceList,
  ResourceTags,
  TagOption,
  TagOptions,
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
  Input,
  LinkOverlay,
  Stack,
  Tag,
  Wrap,
} from '@chakra-ui/react'
import { GroupBase, MultiValue, Select } from 'chakra-react-select'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Resources() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [selectedTags, setSelectedTags] = useState<MultiValue<TagOption>>([])
  const [selectedTiers, setSelectedTiers] = useState<ResourceTags[]>([
    'Bronze',
    'Silver',
    'Gold',
  ])
  const [query, setQuery] = useState<string>('')

  useEffect(() => {
    // Edit Tiers filter
    if (searchParams.has('tiers')) {
      let tiers = searchParams
        .getAll('tiers')
        .filter((str) =>
          ['Bronze', 'Silver', 'Gold'].includes(str)
        ) as ResourceTags[]
      setSelectedTiers(tiers)
    }

    // Edit Tags filter
    if (searchParams.has('tags')) {
      let tags = searchParams.getAll('tags')
      let opts = TagOptions.filter(({ value, label }) => tags.includes(value))
      setSelectedTags(opts)
    }

    // Query is not serializable (dirty way to prevent injection)
  }, [searchParams])

  /*useEffect(() => {
    router.push(
      {
        pathname: '/resources',
        query: {
          tiers: selectedTiers,
          tags: selectedTags.map((tag) => tag.label),
        },
      },
      undefined,
      { shallow: true }
    )
  }, [selectedTiers, selectedTags])*/

  function updateTiers(tiers: ResourceTags[]) {
    setSelectedTiers(tiers)
    router.push(
      {
        pathname: '/resources',
        query: {
          tiers: tiers,
          tags: selectedTags.map((tag) => tag.label),
        },
      },
      undefined,
      { shallow: true }
    )
  }

  function updateTags(tags: MultiValue<TagOption>) {
    setSelectedTags(tags)
    router.push(
      {
        pathname: '/resources',
        query: {
          tiers: selectedTiers,
          tags: tags.map((tag) => tag.label),
        },
      },
      undefined,
      { shallow: true }
    )
  }

  function filter(resource: Resource) {
    // Filter out tiers first
    if (!selectedTiers.some((tier) => resource.tags?.includes(tier)))
      return false

    // Then filter by tag
    if (
      !(
        selectedTags.length === 0 ||
        selectedTags.some((tagOption) =>
          resource.tags?.includes(tagOption.value)
        )
      )
    )
      return false

    // Then filter by query
    return (
      resource.name.toLowerCase().includes(query.toLowerCase()) ||
      resource.description.toLowerCase().includes(query.toLowerCase())
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

      {/* Tier Filtering */}
      <Center my="3">
        <CheckboxGroup
          colorScheme="brand"
          size="lg"
          value={selectedTiers}
          onChange={(tiers: ResourceTags[]) => updateTiers(tiers)}
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
        onChange={updateTags}
      />

      <Input
        my="3"
        placeholder="Query Resources"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        _placeholder={{ opacity: 0.75, color: 'gray.500' }}
      />

      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={8}
        mt="10"
      >
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