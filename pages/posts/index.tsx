import type { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Container from '../../components/container/container'
import distanceToNow from '../../lib/dateRelative'
import { getAllPosts } from '../../lib/getPost'
import { useTranslation } from 'react-i18next'
import dictionaryWords from '../../locales/dictionary'
import { generateFeedRSS } from '../../lib/gen-rss'
import { Button } from 'semantic-ui-react'

export default function NotePage({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { i18n, t } = useTranslation();
    console.log(i18n)
  return (
    <Container>
      {allPosts.filter(post => post.lang == i18n.language).length ? (
        allPosts.filter(post => post.lang == i18n.language).map((post) => (
          <article key={post.slug} className="mb-10">
            <Link
              as={`/posts/${post.slug}`}
              href="/posts/[slug]"
              className="text-lg leading-6 font-bold"
            >
              {post.title}
            </Link>
            <p>{post.excerpt}</p>
            <div className="text-gray-400">
              <time>{distanceToNow(new Date(post.date || new Date()))}</time>
            </div>
          </article>
        ))
      ) : (
        <p>{t(dictionaryWords.noPosts)}</p>
      )}
    </Container>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['slug', 'title', 'excerpt', 'date', 'lang'])
  await generateFeedRSS(allPosts);

  return {
    props: { allPosts },
  }
}
