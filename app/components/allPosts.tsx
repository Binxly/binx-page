import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { GradientCard, GradientCardBody } from './ui/gradient-card'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-lg font-semibold tracking-tighter">
        👁️‍🗨️ Blog Posts 
      </h1>
      <div className="grid gap-4">
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
              className="no-underline"
            >
              <GradientCard>
                <GradientCardBody className="p-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <div className="text-xs italic text-neutral-600 dark:text-neutral-400 whitespace-nowrap no-underline">
                        {formatDate(post.metadata.publishedAt, false)}
                      </div>
                      <span className="text-xs px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg whitespace-nowrap">
                        {post.metadata.tag ? String(post.metadata.tag) : 'notes'}
                      </span>
                    </div>
                    <h2 className="font-medium text-neutral-900 dark:text-neutral-100">
                      {post.metadata.title}
                    </h2>
                  </div>
                </GradientCardBody>
              </GradientCard>
            </Link>
          ))}
      </div>
    </div>
  )
}
