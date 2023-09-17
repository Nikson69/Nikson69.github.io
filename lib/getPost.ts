import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { useTranslation } from 'react-i18next'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export type Post = {
    slug?: string
    title?: string
    author?: string
    date?: Date
    content?: string
    excerpt?: string
    lang?: 'en' | 'ru'
    [key: string]: any
  }
  

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter<Post>(fileContents)

  const items: Post = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
    console.log(field);
  })
  
  console.log(items)
  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => ((post1.date || new Date()) > (post2.date || new Date()) ? -1 : 1))
  return posts
}
