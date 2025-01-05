import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="flex flex-col">
      <h1 className="mb-4 text-lg font-semibold tracking-tighter">
        👁️‍🗨️ Blog Posts 
      </h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
          }
          return 1
        })
        .map((post, index) => (
          <div key={post.slug} className="py-2">
            <Link
              className="inline-block hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors"
              href={`/blog/${post.slug}`}
            >
              <article className="flex flex-col space-y-2 p-2">
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  {formatDate(post.metadata.publishedAt, false)}
                </div>
                <div className="flex flex-row items-center">
                  <h2 className="text-neutral-900 dark:text-neutral-100">
                    {post.metadata.title}
                  </h2>
                  <span className="text-sm px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md ml-2">
                    {post.metadata.tag ? String(post.metadata.tag) : 'notes'}
                  </span>
                </div>
              </article>
            </Link>
            {index < allBlogs.length - 1 && <div className="fade-divider mt-4" />}
          </div>
        ))}
    </div>
  )
}
