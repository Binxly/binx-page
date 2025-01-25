import { RecentPosts } from './components/recentPosts'
import { Typewriter } from "./components/typewriter"
import { AnimatedGridPattern } from "./components/ui/animated-grid-pattern"

export default function Page() {
  return (
    <section>

      <AnimatedGridPattern
          numSquares={33}
          maxOpacity={0.04}
          duration={3}
          repeatDelay={1}
          className="fixed inset-0 h-full w-full -z-10"
        />

      <div className="mb-8 text-[1.6rem] sm:text-2xl font-semibold tracking-tighter text-center sm:text-left">
        <span>Hi, my name is Zac, and I am a </span>
        <br className="sm:hidden" />
        <Typewriter 
          text={[
            "full-stack developer.",
            "GenAI researcher.",
            "digital creator."
          ]}
          className="text-violet-400"
          speed={60}
          waitTime={1500}
        />
      </div>
      <p className="mb-4">
        {`Passionate about deep learning and software engineering. 
        Building accessible GenAI applications with a focus on open-source 
        technologies and transparent data practices. Committed to advancing 
        technological accessibility through responsible AI development and knowledge sharing. 
        Learning more every day.`}
      </p>
      <div className="my-8">
        <RecentPosts />
      </div>
    </section>
  )
}

export const metadata = {
  keywords: [
    'AI engineer', 
    'deep learning', 
    'GenAI', 
    'software development', 
    'Python developer',
    'open source'
  ],
}
