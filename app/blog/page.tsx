import { BlogPosts } from 'app/components/allPosts'

export const metadata = {
  title: 'Binx Bytes',
  description: 'A blog about things I learn, think about, and work on.',
  keywords: [
    'tech blog',
    'software engineering blog',
    'AI development',
    'programming tutorials',
    'tech articles'
  ],
}

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto text-center">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Binx Bytes</h1>
        <p className="text-lg leading-relaxed">
          A blog about things I learn, think about, and work on. 
          <br />
          <br />
          RSS feed available <a href="https://www.binx.page/rss"><u>here</u></a>.
        </p>
      </div>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
