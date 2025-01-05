import { RecentPosts } from './components/recentPosts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Zac Bagley
      </h1>
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
