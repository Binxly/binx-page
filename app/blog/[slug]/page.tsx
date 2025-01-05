import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { TableOfContents } from 'app/components/TableOfContents'
import { CommentSection } from 'app/components/bluesky-comments'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
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
  }
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // console.log('Bluesky URI:', post.metadata.blueskyUri);

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

          {post.metadata.blueskyUri && (
            <div className="mt-16">
              <CommentSection uri={post.metadata.blueskyUri} />
            </div>
          )}
        </section>
        
        {/* Table of Contents */}
        <aside className="hidden lg:block lg:w-1/4 xl:w-1/5 lg:pl-8">
          <div className="sticky top-32">
            <TableOfContents content={post.content} />
          </div>
        </aside>
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
