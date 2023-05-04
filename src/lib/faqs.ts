import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXProvider } from '@mdx-js/react'
import Layout from '@/components/layout'

const faqsDirectory = path.join(process.cwd(), 'faq')

export function getFaqsData() {
  // Get file names under /faq
  const fileNames = fs.readdirSync(faqsDirectory)
  const allFaqsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read mdx file as string
    const fullPath = path.join(faqsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { title: string }),
    }
  })
}

export function getAllFaqsIds() {
  const fileNames = fs.readdirSync(faqsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ''),
      },
    }
  })
}

export async function getFaqData(id: string) {
  const fullPath = path.join(faqsDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Convert to mdx

  // Combine the data with the id and contentHtml
  return {
    id,
  }
}
