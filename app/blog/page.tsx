import { BlogPosts } from 'app/components/allPosts'
import { AnimatedGridPattern } from '../components/ui/animated-grid-pattern'

export const metadata = {
  title: 'Binx Bytes',
  description: 'This is a place where I write about things I am learning, things I am thinking about, or things I find interesting.',
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
        <AnimatedGridPattern
          numSquares={33}
          maxOpacity={0.04}
          duration={3}
          repeatDelay={1}
          className="fixed inset-0 h-full w-full -z-10"
        />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Binx Bytes</h1>
        <p className="text-lg leading-relaxed">
          This is a place where I write about things I'm learning, things I'm thinking about, 
          and things I'm working on. I'm trying to get better about writing more often, and 
          I'm hoping this will help.
        </p>
      </div>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
