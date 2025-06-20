'use client'

import Layout from '@/components/layout'
import { Resource, ResourceList, TagOption, TagOptions } from '@/lib/resources'
import {
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Input,
  LinkOverlay,
  Presence,
  Tag,
  Wrap,
} from '@chakra-ui/react'
import { GroupBase, MultiValue, Select } from 'chakra-react-select'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Resources() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [selectedTags, setSelectedTags] = useState<MultiValue<TagOption>>([])
  const [query, setQuery] = useState<string>('')

  useEffect(() => {
    // Edit Tags filter
    if (searchParams.has('tags')) {
      let tags = searchParams.getAll('tags')
      let opts = TagOptions.filter(({ value, label }) => tags.includes(value))
      setSelectedTags(opts)
    }

    // Query is not serializable (dirty way to prevent injection)
  }, [searchParams])

  function updateTags(tags: MultiValue<TagOption>) {
    setSelectedTags(tags)
    router.push(
      {
        pathname: '/resources',
        query: {
          tags: tags.map((tag) => tag.label),
        },
      },
      undefined,
      { shallow: true }
    )
  }

  function filter(resource: Resource) {
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
      <Heading as="h1" textAlign="center" mb="10" fontSize="5xl">
        Resources
      </Heading>

      <Select<TagOption, true, GroupBase<TagOption>>
        isMulti
        placeholder="Filter Tags"
        options={TagOptions}
        value={selectedTags}
        onChange={updateTags}
      />

      <Input
        my="3"
        placeholder="Search Resources"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        _placeholder={{ opacity: 0.75, color: 'gray.500' }}
      />

      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={8}
        mt="10"
      >
        {ResourceList.map((resource) => (
          <Presence
            key={resource.link}
            present={filter(resource)}
            animationName={{
              _open: 'fade-in',
              _closed: 'fade-out',
            }}
            animationDuration="slowest"
          >
            <GridItem>
              <Card.Root>
                <Card.Header>
                  <Heading size="lg" pb="0">
                    <LinkOverlay href={resource.link} as={Link}>
                      {resource.name}
                    </LinkOverlay>
                  </Heading>
                  <Wrap mb="2">
                    {resource.tags.map((tag) => (
                      <Tag.Root key={tag}>
                        <Tag.Label>{tag}</Tag.Label>
                      </Tag.Root>
                    ))}
                  </Wrap>
                </Card.Header>
                <CardBody pt="0">{resource.description}</CardBody>
              </Card.Root>
            </GridItem>
          </Presence>
        ))}
      </Grid>
    </Layout>
  )
}
