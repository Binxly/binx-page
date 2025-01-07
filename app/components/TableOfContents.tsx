'use client'

import { useEffect, useState } from 'react'

interface TocItem {
  content: string
  slug: string
  level: number
  children?: TocItem[]
}

export function TableOfContents({ content }: { content: string }) {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const lines = content.split('\n')
    const tocItems: TocItem[] = []
    let insideCodeBlock = false

    lines.forEach(line => {
      if (line.trim().startsWith('```')) {
        insideCodeBlock = !insideCodeBlock
        return
      }

      if (!insideCodeBlock) {
        const match = line.match(/^#{1,6}\s+(.+)$/)
        if (match) {
          const headerText = match[1]
          tocItems.push({
            content: headerText,
            slug: headerText.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            level: line.split(' ')[0].length,
            children: []
          })
        }
      }
    })

    const buildHierarchy = (items: TocItem[]): TocItem[] => {
      const result: TocItem[] = []
      const stack: TocItem[] = []

      items.forEach((item) => {
        while (stack.length && stack[stack.length - 1].level >= item.level) {
          stack.pop()
        }
        if (!stack.length) {
          result.push(item)
        } else {
          const parent = stack[stack.length - 1]
          parent.children = parent.children || []
          parent.children.push(item)
        }
        stack.push(item)
      })

      return result
    }

    setToc(buildHierarchy(tocItems))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0% -35% 0%',
        threshold: 0
      }
    )

    document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').forEach((heading) => {
      observer.observe(heading)
    })

    return () => {
      observer.disconnect()
    }
  }, [content])

  const toggleSection = (slug: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev)
      if (next.has(slug)) {
        next.delete(slug)
      } else {
        next.add(slug)
      }
      return next
    })
  }

  const renderTocItem = (item: TocItem, depth = 0) => (
    <li key={item.slug} className="my-1">
      <div className="flex items-center gap-2">
        {(item.children && item.children.length > 0) && (
          <button
            onClick={() => toggleSection(item.slug)}
            className="toc-toggle flex-shrink-0"
          >
            {expandedSections.has(item.slug) ? '−' : '+'}
          </button>
        )}
        <a
          href={`#${item.slug}`}
          className={`toc-link break-words ${activeId === item.slug ? 'active' : ''}`}
          style={{ marginLeft: depth > 0 ? `${depth * 12}px` : '0' }}
        >
          {item.content}
        </a>
      </div>
      {(item.children && item.children.length > 0 && expandedSections.has(item.slug)) && (
        <ul className="ml-4">
          {item.children.map((child) => renderTocItem(child, depth + 1))}
        </ul>
      )}
    </li>
  )

  return (
    <>
      <div className="block lg:hidden w-full mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-3 
            bg-neutral-50 dark:bg-neutral-900
            border border-neutral-200 dark:border-neutral-800
            rounded-lg transition-colors"
          aria-expanded={isOpen}
        >
          <span className="text-neutral-800 dark:text-neutral-200 text-sm font-medium">
            Table of Contents
          </span>
          <svg
            className={`w-4 h-4 text-neutral-500 dark:text-neutral-400 transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isOpen && (
          <div className="mt-2 p-3 bg-neutral-50 dark:bg-neutral-900 
            border border-neutral-200 dark:border-neutral-800 rounded-lg">
            <ul className="toc-list">
              {toc.map((item) => renderTocItem(item))}
            </ul>
          </div>
        )}
      </div>

      <nav className="hidden lg:block toc-nav">
        <h2 className="font-semibold mb-4 text-lg">Table of Contents</h2>
        <ul className="toc-list">
          {toc.map((item) => renderTocItem(item))}
        </ul>
      </nav>
    </>
  )
} 