import { Instagram, Github, Linkedin, Rss } from 'lucide-react'

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className = "" }: SocialLinksProps) {
  const links = [
    {
      href: "https://instagram.com/binx.ly",
      label: "Instagram",
      icon: Instagram
    },
    {
      href: "https://github.com/Binxly",
      label: "GitHub",
      icon: Github
    },
    {
      href: "https://www.linkedin.com/in/zac-bagley-4aa51417a/",
      label: "LinkedIn",
      icon: Linkedin
    },
    {
      href: "https://www.binx.page/rss",
      label: "RSS",
      icon: Rss
    }
  ]

  return (
    <div className={`flex flex-wrap justify-center gap-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors"
        >
          <link.icon className="h-4 w-4" />
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  )
} 