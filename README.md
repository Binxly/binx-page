# Personal Portfolio & Blog

A modern portfolio and blog site built with Next.js, featuring MDX blog posts, SEO optimization, and dynamic content generation.

## Core Features

- MDX/Markdown blog posts with syntax highlighting
- SEO optimization (sitemap, robots.txt, JSON-LD schema)
- RSS Feed support
- Dynamic OG image generation
- Responsive design with Tailwind v4
- Dark mode support
- Performance monitoring via Vercel Speed Insights
- Clean typography using Geist font

## Project Structure

```
.
├── app/
│   ├── about/           # Professional background
│   ├── blog/            # Blog posts and utilities
│   ├── components/      # Reusable components
│   └── global.css       # Global styles
├── public/             # Static assets
└── content/           # MDX blog posts
```

## Development

To run locally:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

## Deployment

Optimized for deployment on [Vercel](https://vercel.com). Connected to my GitHub repository for automatic deployments.

## Todo

- [ ] Implement blog post categories/tags, make visible on home page - 1
- [ ] Better Table of Contents on Blog Posts - 2
- [ ] Add search functionality for blog posts - ?
- [ ] Create projects showcase section - 3
- [ ] Add contact form, perhaps obfuscated python script - ?
- [ ] RSS Feed Improvements - 4
- [ ] Add view counter for blog posts - ?

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- MDX for blog posts
- Vercel for deployment
