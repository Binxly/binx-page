import { Metadata } from 'next'
import { AnimatedGridPattern } from "../components/ui/animated-grid-pattern"

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
      title: "Full Stack Developer",
      company: "LCG Inc",
      period: "Oct 2024 - Present",
      bullets: [
        "Developing AI applications, largely focused on NLP solutions",
        "Engineering cloud infrastructure and managing model deployments",
        "Administering Windows enterprise environments",
        "Implementing automated data pipelines leveraging cloud services"
      ]
    },
    {
      title: "Technology Specialist II",
      company: "LCG Inc",
      period: "Nov 2023 - Oct 2024",
      bullets: [
        "Resolved Level 2 tickets for enterprise hardware and software issues",
        "Managed Active Directory users and group policies",
        "Reviewed Cylance security reports and maintained compliance",
        "Deployed workstations and VoIP phones",
        "Wrote and updated Standard Operating Procedures (SOPs)"
      ]
    },
    {
      title: "Software and GenAI Systems Engineer",
      company: "BINXNET LLC",
      period: "Jun 2021 - Oct 2024",
      bullets: [
        "Developed custom RAG applications and generative AI workflows",
        "Built generative image pipelines using Python",
        "Provided GenAI consulting and model fine-tuning services",
      ]
    },
    {
      title: "IT Specialist Intern",
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
    degree: "A.A.S. in Computer Networking",
    specialization: "Cybersecurity electives",
    institution: "Spartanburg Community College",
    keyStudies: [
      "Foundations in System Administration",
      "Advanced Cisco Router Configuration",
      "Network and Digital Forensics"
    ]
  }

  const certifications = [
    {
      title: "Neural Networks and Deep Learning - DeepLearning.AI",
      link: "#"
    },
    {
      title: "CCNA ENSA - Cisco Networking Academy",
      link: "#"
    },
    {
      title: "Cisco CyberOps Associate - Cisco Networking Academy",
      link: "#"
    }
  ]

  const interests = [
    "Writing", "Digital Art", "Deep Learning","Game Development", 
    "Personal Knowledge Management", "Star Trek"
  ]

  const contact = {
    github: "https://github.com/Binxly",
    email: "contact@binx.page",
    bootdev: "https://www.boot.dev/u/binx"
  }

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
        <h1 className="text-3xl font-bold mb-2">About Me</h1>
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          I build AI-powered applications with a focus on computer vision and natural language processing. 
          My background is formally in networking and cybersecurity, while self-studying programming and deep learning. 
          I'm currently working on developing large-scale data solutions that bridge dynamic client needs with emerging technologies.
        </p>
      </div>
      
      <div className="space-y-12 text-left">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Work Experience</h2>
          {workExperience.map((job, index) => (
            <details key={index} className="mb-8 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg group">
              <summary className="font-semibold text-xl text-neutral-900 dark:text-neutral-100 cursor-pointer list-none">
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
              <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-2 mt-4">
                {job.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="pl-1">{bullet}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Skills</h2>
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
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Education</h2>
          <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              {education.degree}
            </h3>
            <p className="text-sm italic mb-2 text-neutral-600 dark:text-neutral-400">
              {education.specialization}
            </p>
            <p className="mb-4 text-neutral-600 dark:text-neutral-400">
              {education.institution}
            </p>
            <div className="space-y-2">
              {education.keyStudies.map((study, index) => (
                <p key={index} className="text-neutral-600 dark:text-neutral-400">• {study}</p>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Certifications</h2>
          <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg">
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <a href={contact.bootdev} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-800 dark:hover:text-neutral-200 underline">
                  Boot.dev Profile - Learning Path Progress
                </a>
              </li>
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">•</span>
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-800 dark:hover:text-neutral-200 underline"
                  >
                    {cert.title}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-[10px] text-neutral-500 dark:text-neutral-500 mt-4">* links available upon request</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Interests</h2>
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
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Contact & Social</h2>
          <ul className="list-none space-y-2 text-neutral-600 dark:text-neutral-400">
            <li>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-800 dark:hover:text-neutral-200 underline">
                GitHub
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-neutral-800 dark:hover:text-neutral-200 underline">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
