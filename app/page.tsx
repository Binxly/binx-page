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
        I'm an indie full-stack developer and generative model fine-tuner. You can find my
        generative fine-tuning results on Instagram, linked at the bottom of the page. I am passionate
        about experimenting with new things and collaborating with other technology enthusiasts online.
      </p>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
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
