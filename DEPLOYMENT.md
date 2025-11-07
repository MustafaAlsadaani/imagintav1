# Imaginta Deployment Guide

## Hosting

- **Platform**: Vercel (recommended)
- **Framework**: Next.js 14 with App Router
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node Version**: Use Vercel default (>= 18)

## Environment Variables

Set the following keys in Vercel (Settings → Environment Variables):

| Key | Example | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://www.imaginta.com` | Update to final production domain |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Google Analytics 4 tracking ID |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `hello@imaginta.com` | Used in contact forms and metadata |
| `EMAILJS_SERVICE_ID` | `service_xxx` | Required if EmailJS integration is enabled |
| `EMAILJS_TEMPLATE_ID` | `template_xxx` | " |
| `EMAILJS_PUBLIC_KEY` | `public_xxx` | " |

Populate `.env.local` locally using `.env.example` as a template.

## Deployment Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run production build locally**
   ```bash
   npm run build
   npm run start
   ```
   Verify all routes, animations, and forms work as expected.

3. **Connect repository to Vercel**
   - Push changes to the main branch.
   - Import project on Vercel (GitHub/GitLab/Bitbucket).
   - Confirm build command and output directory.

4. **Set environment variables** (see table above).

5. **Configure domain**
   - Add custom domain in Vercel (`imaginta.com`).
   - Update DNS records to point to Vercel.

6. **Analytics**
   - Add GA4 tag in Google Analytics.
   - Replace placeholder tracking ID in `NEXT_PUBLIC_GA_ID`.
   - Optionally enable server-side tracking with Vercel analytics.

7. **Chat Widget**
   - Integrate Intercom, Crisp, or LiveChat by replacing the placeholder component in `components/ui/ChatWidget.tsx`.
   - Follow the provider’s script integration instructions.

8. **Email Service**
   - If using EmailJS or another provider, secure API keys via environment variables.
   - Implement send logic in the contact form submission handler / API route.

9. **Post-Deployment Checklist**
   - Confirm all URLs resolve (including `/sitemap.xml` and `/robots.txt`).
   - Run Lighthouse in production (target scores 90+ for all categories).
   - Validate structured data using Google Rich Results Test.
   - Confirm analytics events and page views are recorded.
   - Ensure the chat widget loads correctly.

## Rollback Strategy

- Vercel keeps deployment history; use the “Promote” button to roll back to a previous stable deployment if needed.
- Keep tagged releases in version control for quick reference.

## Support

- Vercel Support: [support.vercel.com](https://support.vercel.com)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS Documentation: [tailwindcss.com/docs](https://tailwindcss.com/docs)

