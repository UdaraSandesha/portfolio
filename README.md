# Udara Sandesha — Portfolio

A responsive portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, Lucide icons, and an accessible Base UI recommendation dialog.

## Development

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
```

The website runs as a standard Next.js deployment on Vercel. No environment variables or backend services are required.

## Content

- Career, skills, and education: `app/page.tsx`
- Eight recommendation transcripts and excerpts: `app/recommendations.ts`
- Navigation and recommendation interactions: `app/portfolio-interactions.tsx`
- Theme, layout, responsive rules, reduced motion: `app/globals.css`
- Portrait and downloadable original CV: `public/`

The website uses the latest provided LinkedIn work history, the CV's master's and diploma details, and the user's confirmed BSc in Computer Science title. The supplied CV download is preserved as provided and still has its original degree wording. Recommendations are transcribed from user-provided screenshots; excerpts open their complete recommendation.

The composition is inspired by Brittany Chiang's persistent introduction and scrolling portfolio structure; the implementation, styling, and content are original.

The portrait is rendered without CSS transforms. `scripts/prepare-portrait.mjs` creates lossless WebP renditions at 480, 960, 1440, and 1920 pixels before development and production builds. A native picture source set lets the browser select the rendition for the viewport and display pixel density; scrolling and section hover do not change its source or styling. The original photograph is retained.
