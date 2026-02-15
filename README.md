# NRI Solutions

Next.js site for NRI Solutions (Ahmedabad NRI property, legal & asset services), configured for **GitHub Pages**.

## Getting Started

```bash
npm install
npm run dev
```

Open **http://localhost:3000/nri** (basePath is `/nri` for GitHub Pages).

## Deploy to GitHub Pages

1. **Enable Pages** in the repo: **Settings → Pages → Build and deployment**: Source = **GitHub Actions**.
2. Push to `main`; the workflow builds the static site and deploys it.
3. The site will be at: **https://lisaapatel.github.io/nri/**

### Lead form on GitHub Pages

GitHub Pages only serves static files (no `/api/lead`). To collect leads:

- Add a secret in the repo: **Settings → Secrets and variables → Actions** → `NEXT_PUBLIC_LEAD_ENDPOINT` = your form endpoint (e.g. [Formspree](https://formspree.io) URL).
- Or edit `.github/workflows/deploy-pages.yml` and set `NEXT_PUBLIC_LEAD_ENDPOINT` in the `env` block.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js static export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
