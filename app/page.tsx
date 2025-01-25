import { RecentPosts } from './components/recentPosts'
import { Typewriter } from "./components/typewriter"
import { AnimatedGridPattern } from "./components/ui/animated-grid-pattern"
import { SocialLinks } from "./components/socialLinks"

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
        <h1 className="text-3xl font-bold mb-2">Hi, I'm Zac 👋</h1>
        <div className="text-2xl text-violet-400 font-semibold mb-4">
          <Typewriter 
            text={[
              "Full-Stack Developer",
              "GenAI Engineer",
              "Tinkerer",
              "Digital Nomad"
            ]}
            speed={60}
            waitTime={1500}
          />
        </div>
      </div>

      <p className="mb-6 text-lg leading-relaxed">
        I'm an indie full-stack developer and generative model fine-tuner. You can find my 
        generative fine-tuning results on Instagram using the link below! When I'm not 
        reading or working on personal projects, you'll find me experimenting with new tech, tweaking my 
        Arch (btw) configuration, or collaborating with emerging technology enthusiasts online.
      </p>

      <SocialLinks className="mb-8" />

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
    'open source'
  ],
}
