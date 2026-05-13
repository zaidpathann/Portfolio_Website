# Modern Computer Engineering Portfolio

Clean, lightweight portfolio website for a final year Computer Engineering student. Built with React, Vite, Tailwind CSS, Framer Motion, and lucide-react.

## Features

- Simple reference-style home page
- Black and white professional theme
- Working dark and light mode toggle
- Project cards with GitHub links
- Resume download placeholder
- Fully responsive static frontend

## Folder Structure

```text
.
|-- public
|   |-- favicon.svg
|   `-- resume-placeholder.pdf
|-- src
|   |-- App.css
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
|-- package-lock.json
|-- vite.config.js
`-- README.md
```

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Customize Before Deploying

- Replace `Your Name` in `src/App.jsx`.
- Update email and social links in the `socials` array.
- Replace project GitHub URLs in the project cards.
- Replace `public/resume-placeholder.pdf` with your real resume PDF.
- Update college name, degree, current year, and CGPA in the `Education` component.

## Deploy On Vercel

1. Create a GitHub repository.
2. Push this project folder to GitHub.
3. Go to Vercel and sign in with GitHub.
4. Click `Add New Project`.
5. Import your portfolio repository.
6. Keep these settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Click `Deploy`.

## How It Stays Live Permanently

Vercel hosts the generated static files from the `dist` folder on its CDN. After deployment, your site stays online on the Vercel URL until you delete the project or disable the deployment.

To keep it updated:

- Make changes locally.
- Commit and push to GitHub.
- Vercel automatically rebuilds and redeploys the site.

For a professional permanent link, add a custom domain in Vercel:

1. Open your Vercel project.
2. Go to `Settings` > `Domains`.
3. Add your domain.
4. Update DNS records as Vercel shows.
5. Wait for verification.

No backend or database is needed for this portfolio.
