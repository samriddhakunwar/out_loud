# Out Loud

A cinematic collection of short writing from Denmark — travel pieces about light, colour, and quiet days well spent, presented with parallax, animated typography, smooth scrolling, and scroll-driven reveals. Built with Next.js, React, and Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)

> Sibling project to [`../blog`](../blog) ("Denmark, Through My Eyes") — it reuses that project's component architecture and motion system with a new, ink-and-ember visual identity built for reading verse.

## Overview

*Out Loud* is a design-forward home for a handful of short travel pieces set in and around Aalborg and Copenhagen. Each piece has its own page where the prose and its photo-captions reveal as you scroll.

## Features

- **Cinematic hero** — full-viewport image with spring-smoothed scroll parallax and an animated, letter-by-letter title.
- **Scroll-driven reveals** — paragraphs and captions ease into view as you read.
- **Smooth scrolling** — momentum-based scrolling powered by [Lenis](https://github.com/darkroomengineering/lenis).
- **Page transitions** — animated route changes via Framer Motion.
- **Custom cursor** — context-aware cursor that reacts to interactive elements.
- **Dark / light themes** — an "ink" night mode and a warm "paper" day mode.
- **Scroll progress** indicator, animated navbar, and a film-grain overlay.

## Tech Stack

| Concern        | Tool                              |
| -------------- | --------------------------------- |
| Framework      | Next.js 16 (App Router)           |
| UI             | React 19                          |
| Language       | TypeScript 5                      |
| Styling        | Tailwind CSS 4                    |
| Animation      | Framer Motion 12                  |
| Smooth scroll  | Lenis                             |
| Fonts          | Fraunces (display) + Inter (UI), via `next/font` |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Build for production         |
| `npm run start` | Run the production build     |
| `npm run lint`  | Lint with ESLint             |

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home — hero + featured poems + CTA
│   ├── layout.tsx            # Root layout, fonts, global providers
│   ├── globals.css           # Global styles & CSS variables (ink/ember theme)
│   ├── about/                # About the poet
│   └── poems/
│       ├── page.tsx          # Collection index
│       └── [slug]/           # Individual piece pages (scroll reveal)
├── components/               # Reusable UI (cursor, navbar, parallax, card…)
└── lib/
    └── poems.ts              # Piece content & metadata
```

## Adding a Piece

Pieces are data, defined in [`src/lib/poems.ts`](src/lib/poems.ts). Append a new object to the `poems` array:

```ts
{
  slug: 'your-piece-slug',
  title: 'Your Title',
  tagline: 'A one-line subtitle',
  theme: 'fire', // 'fire' | 'longing' | 'stillness' | 'wonder'
  image: '/images/your-image.jpg',
  date: '9 April 2026',
  form: 'Travelogue',
  excerpt: 'A pull-quote line for cards and previews.',
  content: [
    { type: 'paragraph', text: 'A paragraph of prose.' },
    { type: 'caption', text: 'A photo-caption line, shown as an accented pull-quote.' },
  ],
}
```

A `paragraph` renders as body prose; a `caption` renders as an accented, italic pull-quote (used for the photo captions woven through each piece). Drop any matching image into `public/images/`.

## License

Personal project — all writing © Samk.
