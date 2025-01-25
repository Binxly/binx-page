import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { GradientCard, GradientCardBody } from './ui/gradient-card'

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
              <GradientCard>
                <GradientCardBody>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      {formatDate(post.metadata.publishedAt, false)}
                    </div>
                    <span className="text-xs px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded">
                      {post.metadata.tag ? String(post.metadata.tag) : 'notes'}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {post.metadata.title}
                  </h2>
                </GradientCardBody>
              </GradientCard>
            </Link>
          ))}
      </div>
    </div>
  )
}
