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

The website is statically exported to `out/`, ready for a static host. No environment variables or backend services are required.

## Content

- Career, selected work, skills, and education: `app/page.tsx`
- Eight recommendation transcripts and excerpts: `app/recommendations.ts`
- Navigation and recommendation interactions: `app/portfolio-interactions.tsx`
- Theme, layout, responsive rules, reduced motion: `app/globals.css`
- Portrait and downloadable original CV: `public/`

The website uses the latest provided LinkedIn work history, the CV's master's and diploma details, and the user's confirmed BSc in Computer Science title. The supplied CV download is preserved as provided and still has its original degree wording. Recommendations are transcribed from user-provided screenshots; excerpts open their complete recommendation. Platform metrics describe shared team outcomes.

The composition is inspired by Brittany Chiang's persistent introduction and scrolling portfolio structure; the implementation, styling, and content are original.
