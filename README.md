## Imaginta Website

Marketing site for Imaginta, a multimedia digital agency based in Belgium. Built with Next.js 14 (App Router), Tailwind CSS, Framer Motion, and Next SEO.

### Tech Stack

- Next.js 14 + TypeScript
- Tailwind CSS
- Framer Motion
- next-seo
- react-hook-form

### Local Development

```bash
npm install
npm run dev
# open http://localhost:3000
```

### Useful Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create production build |
| `npm run start` | Start production server |

### Project Structure

- `app/` – App Router pages and metadata
- `components/` – Layout, sections, UI primitives, SEO helpers
- `lib/` – Utilities (form validation, analytics placeholder)
- `public/` – Static assets
- `DEPLOYMENT.md` – Hosting instructions

### Pre-deployment Checklist

```
☐ Run npm run build && npm run start (all routes OK)
☐ Verify navigation, forms, chat widget, and CTAs
☐ Test responsive layouts (mobile, tablet, desktop)
☐ Confirm SEO metadata, OpenGraph, and Twitter tags
☐ Validate accessibility (keyboard nav, aria-live, contrast)
☐ Audit with Lighthouse (Performance/Accessibility/Best Practices/SEO ≥ 90)
☐ Check /sitemap.xml and /robots.txt
☐ Replace analytics & chat placeholders with production services
☐ Ensure .env.local contains production secrets
```

See `DEPLOYMENT.md` for Vercel deployment details.
