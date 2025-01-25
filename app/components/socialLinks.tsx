import { Instagram, Github, Linkedin, Rss } from 'lucide-react'
import { GradientCard, GradientCardBody } from './ui/gradient-card'

interface SocialLinksProps {
  className?: string;
  hide?: ('instagram' | 'github' | 'linkedin' | 'rss')[];
}

export function SocialLinks({ className = "", hide = [] }: SocialLinksProps) {
  const links = [
    {
      href: "https://instagram.com/binx.ly",
      label: "Instagram",
      icon: Instagram,
      id: 'instagram' as const
    },
    {
      href: "https://github.com/Binxly",
      label: "GitHub",
      icon: Github,
      id: 'github' as const
    },
    {
      href: "https://www.linkedin.com/in/zac-bagley-4aa51417a/",
      label: "LinkedIn",
      icon: Linkedin,
      id: 'linkedin' as const
    },
    {
      href: "https://www.binx.page/rss",
      label: "RSS",
      icon: Rss,
      id: 'rss' as const
    }
  ]

  const visibleLinks = links.filter(link => !hide.includes(link.id));

  return (
    <div className={`grid ${visibleLinks.length === 3 ? 'grid-cols-3' : 'grid-cols-4'} max-w-lg mx-auto gap-4 ${className}`}>
      {visibleLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GradientCard size="sm">
            <GradientCardBody className="flex items-center justify-center gap-2 p-3">
              <link.icon className="h-5 w-5" />
              <span className="text-sm font-medium">{link.label}</span>
            </GradientCardBody>
          </GradientCard>
        </a>
      ))}
    </div>
  )
} 