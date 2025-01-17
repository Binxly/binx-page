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
    <section>

      <AnimatedGridPattern
          numSquares={33}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className="[mask-image:radial-gradient(4000px_circle_at_center,transparent,white)] fixed inset-0 h-full w-full -z-10"
        />

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
