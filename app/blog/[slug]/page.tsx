import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { CommentSection } from 'app/components/bluesky-comments'
import Link from 'next/link'
import { PostCard, PostCardBody } from 'app/components/ui/postCard'

const tagKeywords = {
  edu: [
    'educational content',
    'programming tutorial',
    'technical guide',
    'learning resources',
    'coding education'
  ],
  notes: [
    'technical notes',
    'development insights',
    'programming thoughts',
    'coding journal',
    'tech observations'
  ]
}

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return {}
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  const tag = post.metadata.tag
  const tagSpecificKeywords = tagKeywords[tag] || []

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    keywords: [
      ...tagSpecificKeywords,
      'blog post',
      'technical writing',
      post.metadata.title.toLowerCase(),
      `${tag} content`
    ],
  }
}

export default function Blog({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Main content */}
        <section className="w-full lg:w-3/4 xl:w-4/5">

          <h1 className="title font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tighter mb-4">
            {post.metadata.title}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-8 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>


          <article className="prose prose-lg dark:prose-invert">
            <CustomMDX source={post.content} />
          </article>

          <div className="mt-8 mb-8">
            <Link href="/blog">
              <PostCard>
                <PostCardBody>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Return to Blog</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">View all posts</p>
                    </div>
                    <span className="text-neutral-500">←</span>
                  </div>
                </PostCardBody>
              </PostCard>
            </Link>
          </div>

          {post.metadata.blueskyUri && (
            <div className="mt-16">
              <CommentSection uri={post.metadata.blueskyUri} />
            </div>
          )}
        </section>

      </div>

      {/* Schema.org metadata */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
    </div>
  )
}
