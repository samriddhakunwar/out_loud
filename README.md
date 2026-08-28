# Out Loud

> *Short pieces about light, colour, and the quiet days in between.*

A cinematic reading experience built around a small collection of personal travel writing — prose snapshots from Denmark, set to parallax imagery, scroll-driven reveals, and smooth momentum scrolling.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Live Demo](https://img.shields.io/badge/Live_Demo-out--loud--six.vercel.app-brightgreen?logo=vercel&logoColor=white)](https://out-loud-six.vercel.app/)

---

## What It Is

*Out Loud* is a personal writing space — not a travel guide, not a portfolio. It's closer to a notebook left open. Each piece is a short, prose-driven account of a place or a moment: a harbour on a clear afternoon, a bike ride to an old stone, a winter morning in a city I hadn't expected to love. The photos are my own. The words are too.

The site is built to disappear behind the writing. The interface is quiet; the motion is deliberate.

---

## Features

| Feature | Detail |
|---|---|
| **Cinematic hero** | Full-viewport image with spring-smoothed scroll parallax and a letter-by-letter animated title |
| **Scroll-driven reveals** | Paragraphs and pull-quotes ease into view as you read down the page |
| **Featured pieces** | Three pieces showcased on the home page with background image parallax |
| **Collection index** | Browseable grid of all pieces with theme, form, date, and excerpt |
| **Individual piece pages** | Full prose with woven photo captions rendered as accented italic pull-quotes |
| **Smooth scrolling** | Momentum-based, native-feeling scroll via [Lenis](https://github.com/darkroomengineering/lenis) |
| **Page transitions** | Animated route changes with Framer Motion |
| **Custom cursor** | Context-aware cursor that reacts to interactive elements |
| **Dark / light themes** | An "ink" night mode and a warm "paper" day mode, togglable at any time |
| **Scroll progress bar** | Thin accent-coloured bar at the top of each piece page |
| **Animated navbar** | Hides on scroll-down, reappears on scroll-up |
| **Film grain overlay** | Subtle texture layer for a tactile, editorial feel |

---

## Tech Stack

| Concern | Tool |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion 12 |
| Smooth scroll | Lenis 1 |
| Fonts | Fraunces (display / headings) + Inter (UI), via `next/font` |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout — fonts, theme, global providers
│   ├── globals.css           # CSS custom properties, ink/ember colour tokens
│   ├── page.tsx              # Home — hero · about blurb · 3 featured pieces · CTA
│   ├── about/
│   │   └── page.tsx          # About page
│   └── poems/
│       ├── page.tsx          # Collection index — all pieces as cards
│       └── [slug]/
│           └── page.tsx      # Individual piece — full prose + captions
└── components/
│   ├── AnimatedNavbar.tsx    # Scroll-aware navbar (hide on down, show on up)
│   ├── AnimatedText.tsx      # Letter-by-letter or word-by-word text reveals
│   ├── CustomCursor.tsx      # Context-aware custom cursor
│   ├── DarkModeToggle.tsx    # Light/dark theme toggle button
│   ├── PageTransitionWrapper.tsx  # Framer Motion page transition wrapper
│   ├── ParallaxImage.tsx     # Scroll-parallax image component
│   ├── PoemCard.tsx          # Card used on the collection index
│   ├── ScrollProgress.tsx    # Thin scroll progress bar
│   └── SmoothScrollProvider.tsx   # Lenis smooth scroll setup
└── lib/
    └── poems.ts              # All piece content and metadata (single source of truth)
```

---

## Getting Started

**Live site → [out-loud-six.vercel.app](https://out-loud-six.vercel.app/)**

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for local development.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server (with Turbopack) |
| `npm run build` | Build for production |
| `npm run start` | Serve the production build |
| `npm run lint` | Lint with ESLint |

---

## Adding a New Piece

All writing lives in [`src/lib/poems.ts`](src/lib/poems.ts). Add a new object to the `poems` array:

```ts
{
  slug: 'your-piece-slug',          // URL: /poems/your-piece-slug
  title: 'Your Title',
  tagline: 'A one-line subtitle shown on the collection card',
  theme: 'stillness',               // 'fire' | 'longing' | 'stillness' | 'wonder'
  image: '/images/your-image.jpg',  // Card & fallback image
  cover: '/images/your-cover.jpg',  // Optional separate hero/featured image
  date: '28 August 2026',
  form: 'Travelogue',               // e.g. 'Travelogue', 'Sketch', 'Note'
  excerpt: 'A pull-quote line used on cards and featured sections.',
  content: [
    { type: 'paragraph', text: 'A paragraph of prose.' },
    { type: 'caption',   text: 'A photo caption, rendered as an accented italic pull-quote.' },
  ],
}
```

Then drop the matching image(s) into `public/images/`. No other files need to change — the collection index, featured picks on the home page, and the individual piece route all derive from this one array.

---

## License

Personal project — all writing and photography © Samk.
