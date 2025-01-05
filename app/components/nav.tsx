import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/about': {
    name: 'about',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row items-center pr-10">
            {Object.entries(navItems).map(([path, { name }], index) => (
              <>
                <Link
                  key={path}
                  href={path}
                  className="
                    transition-all duration-200
                    text-neutral-600 dark:text-neutral-400 
                    hover:text-neutral-900 dark:hover:text-neutral-100
                    py-2 px-4
                    capitalize
                    font-medium
                  "
                >
                  {name}
                </Link>
                {index < Object.entries(navItems).length - 1 && (
                  <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-800" />
                )}
              </>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  )
}