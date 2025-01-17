import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { LinePatternCard, LinePatternCardBody } from './ui/line-pattern-card'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-lg font-semibold tracking-tighter">
        👁️‍🗨️ Blog Posts 
      </h1>
      <div className="grid gap-3">
        {allBlogs
          .sort((a, b) => {
            if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
              return -1
            }
            return 1
          })
          .map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="transition-transform hover:-translate-y-0.5"
            >
              <LinePatternCard>
                <LinePatternCardBody className="p-3">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h2 className="font-medium text-neutral-900 dark:text-neutral-100">
                        {post.metadata.title}
                      </h2>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">
                        {formatDate(post.metadata.publishedAt, false)}
                      </div>
                    </div>
                    <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md shrink-0">
                      {post.metadata.tag ? String(post.metadata.tag) : 'notes'}
                    </span>
                  </div>
                </LinePatternCardBody>
              </LinePatternCard>
            </Link>
          ))}
      </div>
    </div>
  )
}
