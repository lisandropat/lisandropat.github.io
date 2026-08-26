# lisandropat.com

If you found this README on GitHub, chances are you're here for the code rather than the design: you want to know whether the person who made the site can also build it. Here's the short version.

## My journey

I started with HTML, CSS and PHP. Then came MySQL, and for a while I assumed that was the road ahead... it turned out I was facing the wrong way. The deeper I went into the database, the more I noticed I kept drifting back toward the other end of the request: the part people actually see and touch. At some point I stopped treating the frontend as the last step of the job and started treating it as the job.

React was where that clicked, from there I worked my way through the ecosystem: **Gatsby**, which is where I learned **GraphQL**, and later **Astro**, which is what this site runs on. Somewhere along the way I picked up **Tailwind CSS** and never went looking for a way back.

That path is also why I ended up in product design. Having spent years on the implementation side, I know what a design costs to build, and that tends to make the design better, not smaller.

## About this repo

This site is a rewrite. The previous version was hand-written HTML, CSS and JavaScript with Tailwind loaded from a CDN; this one is a proper build.

**Stack**

- [Astro](https://astro.build) — static output, zero framework runtime shipped to the browser
- [Tailwind CSS v4](https://tailwindcss.com) — CSS-first config, no `tailwind.config.js`
- TypeScript
- GitHub Pages, built and deployed from GitHub Actions

**A few things I care about in here**

- **Almost no JavaScript.** The scroll-driven animations — the expanding panels, the parallax, the elements that fade as you scroll — run on CSS scroll-driven animations (`view-timeline` and `scroll()`), not on scroll listeners. They're reversible by default and run off the main thread. Everything sits behind `@supports` with a working fallback, and behind `prefers-reduced-motion`.
- **The image lightbox is a native `<dialog>`.** Focus trapping, `Esc` to close, and top-layer stacking come from the platform instead of a library. The open/close transition uses `@starting-style` and `transition-behavior: allow-discrete`.

## Running it locally

Requires Node 22 or newer.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the build
npm run check    # type-check .astro and .ts
```

## Elsewhere

- Portfolio — [lisandropat.com](https://lisandropat.com)
- Case studies — [Behance](https://www.behance.net/lisandropat)
- [LinkedIn](https://www.linkedin.com/in/lisandropat/)
- lisandropat@gmail.com