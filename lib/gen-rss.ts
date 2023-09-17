import RSS from 'rss'
import { Post, getAllPosts } from "./getPost"
import fs from 'fs'

export async function generateFeedRSS(allPosts: Post[]) {
  const feed = new RSS({
    title: 'Your Name',
    site_url: 'https://yoursite.com',
    feed_url: 'https://yoursite.com/feed.xml',
  })
  
  
  allPosts.map((post) => {
    feed.item({
      title: post.title || '',
      url: '/posts/' + post.title,
      date: post.date || new Date(),
      description: post.description,
      categories: post?.tag?.split(', '),
      author: post.author,
    })
  })

  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }))
}
