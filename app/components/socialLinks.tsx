import { Instagram, Github, Linkedin, Rss } from 'lucide-react'
import { GradientCard, GradientCardBody } from './ui/gradient-card'

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
    <div className={`grid grid-cols-4 gap-2 ${className}`}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GradientCard size="sm">
            <GradientCardBody className="flex items-center justify-center gap-1.5 p-2">
              <link.icon className="h-4 w-4" />
              <span className="text-2xl font-medium">{link.label}</span>
            </GradientCardBody>
          </GradientCard>
        </a>
      ))}
    </div>
  )
} 