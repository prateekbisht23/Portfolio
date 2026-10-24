# prateek.bishh.dev

My personal site, built on [my design system](https://design.bishh.dev): one narrow column, light Geist type, hairlines instead of boxes and a single marigold accent.

Next.js 15 (App Router), plain CSS with the design system's tokens in `src/app/globals.css`, and content in `src/data`.

```sh
bun install
bun dev
```

Case studies live in `src/data/work.ts` and render at `/work/[slug]`. The activity strip on the home page reads public GitHub contributions once a day.

The design and content are mine; please don't reuse them as-is.
