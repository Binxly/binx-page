export default function Page() {
  const workExperience = [
    {
      title: "Full Stack Developer",
      company: "LCG Inc",
      period: "Oct 2024 - Present",
      bullets: [
        "Developing and implementing AI-driven solutions with Python, resulting in significant workflow optimization",
        "Managing cloud infrastructure for production GenAI models and API endpoints",
        "Leveraging enterprise AI platforms including Microsoft Azure AI Studio, AWS Bedrock, and AWS SageMaker",
        "Administering Microsoft Active Directory environment, including software deployment, group policies, and access permissions"
      ]
    },
    {
      title: "Level 2 Technology Specialist",
      company: "LCG Inc",
      period: "Nov 2023 - Oct 2024",
      bullets: [
        "Resolved complex technical issues using enterprise solutions including Cylance, MobileIron, and Active Directory",
        "Streamlined IT operations through ServiceNow ticket management and creation of Standard Operating Procedures (SOPs)",
        "Developed documentation for Microsoft Azure API endpoint creation, enabling standardized deployment processes",
        "Managed Active Directory user accounts, group policies, and access permissions"
      ]
    },
    {
      title: "Fine-Tuner and GenAI Consultant",
      company: "BINXNET LLC",
      period: "Jun 2021 - Oct 2023",
      bullets: [
        "Engineered agentic data pipelines for RAG applications and custom generative diffusion workflows",
        "Gained hands-on experience in Python, debugging, Git, Diffusers, and PyTorch",
        "Offered generative model fine-tuning services, processing large amounts of data and evaluating GenAI models",
        "Organized community events, encouraging open-source innovation and collaborative research",
        "Provided extensive GenAI consultations for a variety of clients"
      ]
    },
    {
      title: "Technology Cadet (Student Internship)",
      company: "Spartanburg School District 5",
      period: "Jan 2016 - Jan 2017",
      bullets: [
        "Provided technical support to faculty and staff of District 5 schools as part of an accelerated student program",
        "Managed user accounts and performed network device troubleshooting across multiple school locations",
        "Gained helpdesk ticketing software experience, tracking and resolveing technical issues efficiently"
      ]
    }
  ]

  const skills = [
    "Python", "GenAI", "Machine Learning",
    "Cloud Services (AWS/Azure)", "Active Directory",
    "Jupyter Notebooks", "Data Management",
    "Windows", "Arch Linux", "Ubuntu",
    "Cisco Networking Hardware", "Next.js"
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
    "Personal Knowledge Management",
  ]

  const contact = {
    email: "contact@binx.page",
  }

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>

      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        I am a Developer and GenAI researcher based in the DMV area, specializing in AI-driven applications and cloud solutions. 
        With extensive experience in Python and cloud services, I focus on developing tools using open-source machine learning technologies. 
        My expertise includes fine-tuning generative diffusion models, creating RAG applications, and managing cloud environments for AI training and deployments.
      </p>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        I am currently working as a full-stack developer at LCG Inc, and I spend much of my free time learning by working on personal projects, 
        and keeping up with the latest advancements in the field of generative artifical intelligence.
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
