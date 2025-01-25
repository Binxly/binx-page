import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { LinePatternCard, LinePatternCardBody } from './ui/line-pattern-card'

export function RecentPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="flex flex-col space-y-6">
      <div className="grid gap-4">
        {allBlogs
          .sort((a, b) => {
            if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
              return -1
            }
            return 1
          })
          .slice(0, 3)
          .map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
            >
              <LinePatternCard>
                <LinePatternCardBody>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    {formatDate(post.metadata.publishedAt, false)}
                  </div>
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {post.metadata.title}
                  </h2>
                  <span className="inline-block text-sm px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md">
                    {post.metadata.tag ? String(post.metadata.tag) : 'notes'}
                  </span>
                </LinePatternCardBody>
              </LinePatternCard>
            </Link>
          ))}
      </div>
    </div>
  )
}
