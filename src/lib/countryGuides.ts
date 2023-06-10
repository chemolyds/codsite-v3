import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const countryGuidesDirectory = path.join(process.cwd(), 'countryGuides')

export async function getCountryGuidesData() {
  // Get file names under /countryGuides
  const fileNames = fs.readdirSync(countryGuidesDirectory)
  const allCountryGuidesData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read mdx file as string
    const fullPath = path.join(countryGuidesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as {
        title: string
        description: string
        order: number
      }),
    }
  })

  // Return the data (sorted maybe)
  return allCountryGuidesData
}

export function getAllCountryGuidesIds() {
  const fileNames = fs.readdirSync(countryGuidesDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ''),
      },
    }
  })
}

export async function getCountryGuideData(id: string) {
  const fullPath = path.join(countryGuidesDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')

  // Combine the data with the id and contentHtml
  return {
    id,
    fileContents,
  }
}
