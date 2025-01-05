import { BlogPosts } from 'app/components/allPosts'

export const metadata = {
  title: 'Binx Bytes',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Binx Bytes</h1>

      <p>
        This is a place where I write about things I'm learning, things I'm thinking about, and things I'm working on. 
      </p>
      <p className="mb-8">
        Trying to get better about writing more often!
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
