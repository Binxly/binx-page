export default function Page() {
  const workExperience = [
    {
      title: "Full Stack Developer",
      company: "LCG Inc",
      period: "Oct 2024 - Present",
      bullets: [
        "Building AI-driven applications and managing cloud GenAI deployments",
        "Developing serverless RAG applications and vector search solutions",
        "Engineering cloud infrastructure across Azure and AWS platforms",
        "Managing enterprise Active Directory and device environments"
      ]
    },
    {
      title: "Technology Specialist II",
      company: "LCG Inc",
      period: "Nov 2023 - Oct 2024",
      bullets: [
        "Provided enterprise-level technical support and system administration",
        "Managed Active Directory user accounts and security procedures"
      ]
    },
    {
      title: "Software and GenAI Systems Engineer",
      company: "BINXNET LLC",
      period: "Jun 2021 - Oct 2024",
      bullets: [
        "Developed custom RAG applications and generative AI workflows",
        "Built data pipelines using Python, PyTorch, and Diffusers",
        "Provided GenAI consulting and model fine-tuning services",
        "Led community events focused on open-source AI innovation"
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
    "Writing", "Digital Art", "Game Development", 
    "Personal Knowledge Management", "Star Trek"
  ]

  const contact = {
    github: "https://github.com/Binxly",
    email: "contact@binx.page",
    bootdev: "https://www.boot.dev/u/binx"
  }

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>

      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        I'm a Full Stack Developer and GenAI Researcher specializing in diffusion models and AI-driven applications. 
        With a background in networking and cybersecurity, I combine Azure cloud services with machine learning 
        to create accessible solutions. My core focus is on computer vision and NLP workflows, while expanding 
        my development skills by building enterprise applications.
      </p>
      
      <div className="space-y-8">
        <div>
          <h2 className="mb-4 text-xl font-medium tracking-tight">Work Experience</h2>
          {workExperience.map((job, index) => (
            <div key={index} className="mb-6">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                {job.title} - {job.company}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {job.period}
              </p>
              <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-1">
                {job.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="pl-1">{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h2 className="mb-4 text-xl font-medium tracking-tight">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="text-sm px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-medium tracking-tight">Education</h2>
          <div className="text-neutral-600 dark:text-neutral-400">
            <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-1">
              {education.degree}
            </h3>
            <p className="text-sm mb-2 italic">
              {education.specialization}
            </p>
            <p className="mb-4 text-sm">
              {education.institution}
            </p>
            <div className="pl-4 border-l-2 border-neutral-200 dark:border-neutral-800">
              {education.keyStudies.map((study, index) => (
                <p key={index} className="mb-2 text-sm">• {study}</p>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-medium tracking-tight">Certifications</h2>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400">
            <li className="mb-2">
              <a href={contact.bootdev} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-800 dark:hover:text-neutral-200 underline">
                Boot.dev Profile - Learning Path Progress
              </a>
            </li>
            {certifications.map((cert, index) => (
              <li key={index} className="mb-2">
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
          <p className="text-[10px] text-neutral-500 dark:text-neutral-500 mt-1">* links available upon request</p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-medium tracking-tight">Interests</h2>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest, index) => (
              <span 
                key={index}
                className="text-sm px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-medium tracking-tight">Contact & Social</h2>
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

export const metadata = {
  keywords: [
    'work experience',
    'AI researcher',
    'full stack developer',
    'cloud computing',
    'machine learning engineer',
    'professional background'
  ],
}
