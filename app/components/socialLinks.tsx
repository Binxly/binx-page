import { Instagram, Github, Linkedin, Rss } from 'lucide-react'
import { PostCard, PostCardBody } from './ui/postCard'

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
      href: "https://www.linkedin.com/in/zac-bagley/",
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
    <div className={`grid ${visibleLinks.length === 3 ? 'grid-cols-3' : 'grid-cols-4'} max-w-md mx-auto gap-2 ${className}`}>
      {visibleLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          <PostCard size="sm">
            <PostCardBody className="flex items-center justify-center p-2 transition-colors group">
              <link.icon className="h-4 w-4 transition-all duration-200 group-hover:scale-125 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
            </PostCardBody>
          </PostCard>
        </a>
      ))}
    </div>
  )
} 
