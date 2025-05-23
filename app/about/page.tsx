import { Metadata } from 'next'
import { SocialLinks } from "../components/socialLinks"
import { PostCard, PostCardBody } from "../components/ui/postCard"

export const metadata: Metadata = {
  title: 'About Me | Binx',
  description: 'Full Stack Developer and GenAI Researcher specializing in diffusion models and AI-driven applications.',
  keywords: [
    'Full Stack Developer',
    'GenAI',
    'Machine Learning',
    'AI Applications',
    'Cloud Computing',
    'Python',
    'TypeScript',
    'React',
    'Next.js',
    'work experience',
    'AI researcher',
    'full stack developer',
    'cloud computing',
    'machine learning engineer',
    'professional background',
    'professional experience',
    'professional skills',
    'professional education',
    'professional certifications',
    'professional interests',
    'professional contact'
  ],
}

export default function Page() {
  const workExperience = [
    {
      title: "GenAI Cloud Engineer",
      company: "LCG Inc",
      period: "Oct 2024 - Mar 2025",
      bullets: [
        "Official title: Full Stack Developer",
        "Deployed GenAI models in Azure and AWS environments",
        "Integrated API endpoints and vector storage at scale",
        "Built Python environments using LangChain and Azure SDKs",
        "Created vector databases integrated into Retrieval-Augmented Generation pipelines",
        "Engineered tools allowing users to interface with AI for automated tasks"
      ]
    },
    {
      title: "Technology Specialist II",
      company: "LCG Inc",
      period: "Nov 2023 - Oct 2024",
      bullets: [
        "Resolved Level 2 tickets for enterprise hardware and software environments",
        "Managed Active Directory users and group policies",
        "Reviewed Cylance security reports and maintained compliance",
        "Contributed to and updated Standard Operating Procedures (SOPs)"
      ]
    },
    {
      title: "Founder and GenAI Systems Engineer",
      company: "BINXNET LLC",
      period: "Jun 2021 - Oct 2024",
      bullets: [
        "Developed custom RAG applications using embeddings and vector databases",
        "Built generative image pipelines using Python, PyTorch, and Diffusers",
        "Provided consulting and generative model fine-tuning services",
      ]
    },
    {
      title: "IT Specialist",
      company: "Spartanburg School District 5",
      period: "Jan 2016 - Jan 2017",
      bullets: [
        "Provided technical support in accelerated student program",
        "Managed user accounts and network device troubleshooting",
        "Operated helpdesk ticketing systems"
      ]
    }
  ]

  const skills = [
    "GenAI", "RAG Applications", "PyTorch", "Diffusers",
    "Vector Search", "LLMs", "Computer Vision", "NLP",
    "AWS", "Azure", "Python", "TypeScript", "Next.js",
    "React", "Git", "Active Directory", "Windows",
    "Arch Linux", "Ubuntu", "Network Security", "DevOps"
  ]

  const education = {
    degree: "Computer Networking",
    specialization: " A.A.S.",
    institution: "Cybersecurity electives",
    keyStudies: [
      "Foundations in System Administration",
      "Advanced Cisco Router Configuration",
      "Network and Digital Forensics"
    ]
  }

  const certifications = [
    {
      title: "AI Agent Fundamentals",
      issuer: "Hugging Face",
      date: "2025",
      link: "#"
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI",
      date: "2024",
      link: "#"
    },
    {
      title: "CCNA ENSA",
      issuer: "Cisco Networking Academy",
      date: "2022",
      link: "#"
    },
    {
      title: "Cisco CyberOps Associate",
      issuer: "Cisco Networking Academy",
      date: "2022",
      link: "#"
    }
  ]

  const interests = [
    "Writing", "Digital Art", "Deep Learning", "Game Development",
    "Personal Knowledge Management", "Star Trek"
  ]

  const contact = {
    github: "https://github.com/Binxly",
    email: "contact@binx.page",
    bootdev: "https://www.boot.dev/u/binx"
  }

  return (
    <section className="max-w-3xl mx-auto text-center">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">About Me</h1>
        <p className="text-lg leading-relaxed">
          Self-study and professional experience.
        </p>
      </div>

      <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Contact & Social</h2>
          <div className="space-y-6">
            <SocialLinks className="mb-4" hide={['rss']} />
          </div>
        </div>

      <div className="space-y-12 text-left">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Work Experience</h2>
          {workExperience.map((job, index) => (
            <PostCard key={index} className="mb-4">
              <details className="group [&>summary::-webkit-details-marker]:hidden [&>summary::marker]:hidden">
                <summary className="font-semibold text-xl cursor-pointer list-none p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="inline">{job.title}</h3>
                      <p className="text-sm italic text-neutral-600 dark:text-neutral-400 mt-1">
                        {job.company} • {job.period}
                      </p>
                    </div>
                    <span className="text-neutral-500 transform group-open:rotate-180 transition-transform duration-200">▼</span>
                  </div>
                </summary>
                <PostCardBody>
                  <ul className="space-y-3">
                    {job.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400"
                      >
                        <div className="h-4 w-[2px] bg-violet-400 dark:bg-violet-600 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </PostCardBody>
              </details>
            </PostCard>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Skills</h2>
          <PostCard>
            <PostCardBody>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-sm px-3 py-1.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </PostCardBody>
          </PostCard>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Education</h2>
          <PostCard>
            <PostCardBody>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                    {education.degree}
                  </h3>
                  <p className="text-lg text-neutral-700 dark:text-neutral-300 mt-1">
                    {education.institution}
                  </p>
                  <p className="text-sm italic text-neutral-600 dark:text-neutral-400 mt-1">
                    {education.specialization}
                  </p>
                </div>

                <div className="flex-1">
                  <h4 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
                    Key Studies
                  </h4>
                  <ul className="space-y-3">
                    {education.keyStudies.map((study, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400"
                      >
                        <div className="h-4 w-[2px] bg-violet-400 dark:bg-violet-600 shrink-0" />
                        <span>{study}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </PostCardBody>
          </PostCard>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Certifications</h2>
          <div className="space-y-4">
            <a
              href={contact.bootdev}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PostCard>
                <PostCardBody>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Boot.dev Profile</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">Learning Path Progress</p>
                    </div>
                    <span className="text-neutral-500">→</span>
                  </div>
                </PostCardBody>
              </PostCard>
            </a>

            {certifications.map((cert, index) => (
              <PostCard key={index}>
                <PostCardBody>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">{cert.title}</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                    {cert.link !== "#" && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                      >
                        →
                      </a>
                    )}
                  </div>
                </PostCardBody>
              </PostCard>
            ))}
            <p className="text-[10px] text-neutral-500 dark:text-neutral-500 text-center mt-2">
              * certification links available upon request
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Interests</h2>
          <PostCard>
            <PostCardBody>
              <div className="flex flex-wrap justify-center gap-2">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="text-sm px-3 py-1.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </PostCardBody>
          </PostCard>
        </div>
      </div>
    </section>
  )
}
