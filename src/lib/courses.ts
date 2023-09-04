import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const coursesDirectory = path.join(process.cwd(), 'courses')

export async function getSectionNames() {
  // Get file names under /courses
  const fileNames = fs.readdirSync(coursesDirectory)
  const allSectionsData = fileNames.map((fileName) => {
    return fileName
  })
  return allSectionsData
}

export async function getCoursesData(section: string) {
  // Get file names under /courses/[section]
  const fileNames = fs.readdirSync(path.join(coursesDirectory, section))
  const allCoursesData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read mdx file as string
    const fullPath = path.join(coursesDirectory, section, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { title: string, description: string}),
    }
  })

  // return the data (sorted maybe)
  return allCoursesData
}

export function getAllCoursesIds() {
  const sectionNames = fs.readdirSync(coursesDirectory)
  const paths = sectionNames.map((sectionName) => {
    const fileNames = fs.readdirSync(path.join(coursesDirectory, sectionName))
    return fileNames.map((fileName) => {
      return {
        params: {
          section: sectionName,
          id: fileName.replace(/\.mdx$/, ''),
        },
      }
    })
  })
  return paths.flat()
}

export async function getCourseData(section: string, id: string) {
  const fullPath = path.join(coursesDirectory, section, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')

  // Combine the data with the id and contentHtml
  return {
    id,
    fileContents,
  }
}

export async function getCourseTableOfContents(section: string, id: string) {
  const fullPath = path.join(coursesDirectory, section, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  
  const headers = fileContents.match(/##.+(?=\n)/g)

  if (!headers) return undefined;
  return headers.map((header) => {
    // Cleans up heading for id
    // Removes subsection number, special characters and converts space to dash
    const id = header
      .replace(/^##\s*[0-9.]+\s*/, '')
      .trim()
      .toLowerCase()
      .replace(/[\s]+/g, '-')
      .replace(/[^\w-]+/g, '')

    return {
      title: header.substring(3),
      id: id,
    }
  })
}