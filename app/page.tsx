import { RecentPosts } from './components/recentPosts'
import { Typewriter } from "./components/typewriter"

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto text-center">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
          Hi, my name is Zac 👋
        </h1>
        <div className="flex items-center justify-center gap-2">
          <p className="text-2xl text-neutral-600 dark:text-neutral-400">
            I am a
          </p>
          <div className="text-2xl text-violet-400 font-semibold">
            <Typewriter
              text={[
                "Full-Stack Developer",
                "GenAI Systems Engineer",
                "Tinkerer"
              ]}
              speed={60}
              waitTime={1500}
            />
          </div>
        </div>
      </div>

      <p className="mb-8 text-lg leading-relaxed">
        Passionate about web technologies, generative deep learning, and open-source.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="space-y-4">
          <p className='text-xl font-medium'>
            🔭 Currently Working On
          </p>
          <ul className="custom-list-projects">
            <li><a href='https://github.com/Binxly/binx-page' className="hover:underline">This website - TS with Next.js</a></li>
            <li><a href='https://github.com/Binxly/monkey-interpreter' className="hover:underline">Monkey Interpreter - Go</a></li>
            <li><a href='https://github.com/Binxly/Atomizer' className="hover:underline">Obsidian Plugin: Atomizer - TS</a></li>
            <li><a href='https://github.com/Binxly/raidr' className="hover:underline">Discord Bot: Raidr - JS</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className='text-xl font-medium'>
            📚 Currently Learning
          </p>
          <ul className="custom-list-learning">
            <li><a href='https://gobyexample.com' className="hover:underline">Go</a></li>
            <li><a href='https://refactoring.guru/design-patterns/catalog' className="hover:underline">Design Patterns</a></li>
            <li><a href='https://www.deeplearning.ai/courses/deep-learning-specialization/' className="hover:underline">Sequence Models</a></li>
            <li><a href='https://www.theodinproject.com/' className="hover:underline">The Odin Project</a></li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-medium">👁️‍🗨️ Recent Posts</h2>
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
    'Full Stack Developer',
    'Application Engineer',
    'SWE',
    'SWE Blog',
    'ML Blog',
    'Developer portfolio',
    'open source'
  ],
}
