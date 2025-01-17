import { RecentPosts } from './components/recentPosts'
import { Typewriter } from "./components/typewriter"

export default function Page() {
  return (
    <section>
      <div className="mb-8 text-2xl font-semibold tracking-tighter">
        <span>Hi, my name is Zac, and I am a </span>
        <Typewriter 
          text={[
            "developer.",
            "researcher.",
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
        digital equality through responsible AI development and knowledge sharing.`}
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
