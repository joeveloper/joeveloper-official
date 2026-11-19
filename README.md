# Joeveloper — Corporate Website

A premium, responsive digital transformation agency website for Joeveloper (Lagos / Paris). Built with Next.js App Router, TypeScript, Tailwind CSS and Inter Tight, following **Joeveloper Figma V3**.

## Getting started

Requires Node.js 20 or newer.

```bash
npm ci
npm run dev
npm run build
```

## Content and navigation

The homepage contains working anchor destinations: Home, Services, Industries, Products (Attengram), Insights, About and Contact. All service CTAs currently start a prefilled email to `hello@joeveloper.com`; verify that mailbox is operational before launch.

**Note:** The Insights section is an honest placeholder announcing planned publications, not invented articles, and the industry list is positioning copy, not a claim of completed projects.

## Cinematic hero

The site ships with the Figma V3 cinematic static fallback in `public/images/hero.png`. To add a video when ready:

1. Optimize a silent, 12–18 second seamless MP4 loop (H.264 recommended); do not include audio.
2. Save it under `public/videos/joeveloper-hero.mp4`.
3. Set `NEXT_PUBLIC_HERO_VIDEO_URL=/videos/joeveloper-hero.mp4` in the deployment environment or in `.env.local`.

The hero always retains its poster image. If video fails to load, the poster remains visible. With a reduced-motion preference, video does not render. Do not set the variable until the video file actually exists, to avoid a broken media request.

## Menu and accessibility

The MENU + button opens a desktop/mobile full-screen navigation panel. Escape and Close × dismiss it, keyboard focus is contained within the open panel, body scroll is locked, and every anchor points to a real section. The interface avoids heavy scroll animation.

## Still needed before public launch

- Test in real browsers and mobile devices and perform Lighthouse/accessibility checks.
- Replace illustration-style team imagery with real, approved company photography when available.
- Verify mail delivery and introduce a booking/contact solution if preferred.
- Add detailed service pages, verified case studies, bilingual EN/FR content and privacy/legal pages.
- Review copy and metadata with the company, and verify external Attengram URL.

Figma V3: https://www.figma.com/design/beKnbSu5KLvn8FqOnvE7dk?node-id=12-2
