import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const faqDirectory = path.join(process.cwd(), 'faq')

export function getFaqsData() {
  // Get file names under /faq
  const fileNames = fs.readdirSync(faqDirectory)
  const allFaqsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read mdx file as string
  })
}
