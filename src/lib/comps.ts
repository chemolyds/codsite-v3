import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

type Competition = 'acot' | 'wcc' | 'socc' | 'scho'

const compsDirectory = path.join(process.cwd(), 'competitions')

export async function getCompsData(comp: Competition) {
  // Get file names under /faq
  const fileNames = fs.readdirSync(path.join(compsDirectory, comp))
  const allCompsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read mdx file as string
    const fullPath = path.join(compsDirectory, comp, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { title: string; description: string }),
    }
  })

  // return the data (sorted maybe)
  return allCompsData
}

export function getAllCompsIds(comp: Competition) {
  const fileNames = fs.readdirSync(path.join(compsDirectory, comp))
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ''),
      },
    }
  })
}

export async function getCompData(comp: Competition, id: string) {
  const fullPath = path.join(compsDirectory, comp, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')

  // Combine the data with the id and contentHtml
  return {
    id,
    fileContents,
  }
}
