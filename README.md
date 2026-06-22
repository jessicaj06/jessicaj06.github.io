# Jessica J. — Portfolio

A fast, animated portfolio for an AI / GPU-computing engineer. Built with
**Vite + React + TypeScript + Tailwind CSS v4 + Motion**, deployed free on
**GitHub Pages**.

Live site (after deploy): **https://jessicaj06.github.io**

---

## ✏️ How to update your content

Almost everything lives in one file — [`src/data.ts`](src/data.ts):

- `profile` — your name, role, tagline, email, GitHub/LinkedIn links, and the
  "About" paragraphs.
- `skillGroups` — your skills and proficiency bars.
- `projects` — your project cards (title, blurb, tags, repo/demo links, status).
- `learning` — the "currently learning" terminal list.

Edit the text, save, and the site updates. No other files need to change for
normal content updates.

> Tip: as you publish real repos, paste their URLs into each project's `repo`
> field, and fill in `profile.linkedin` / `profile.resumeUrl` when you have them.

---

## 🧑‍💻 Run it locally

```bash
npm install     # first time only
npm run dev     # start dev server → http://localhost:5173
npm run build   # production build into dist/
npm run preview # preview the production build
```

Requires Node 18+ (Node 20 recommended).

---

## 🚀 Deploy to GitHub Pages (one-time setup)

Your GitHub username is **`jessicaj06`**, so this deploys to the special
**user site** repo and is served at `https://jessicaj06.github.io`.

### 1. Create the repository

Create a new repo named **exactly** `jessicaj06.github.io` (must match your
username) at https://github.com/new — leave it empty (no README).

### 2. Push this project

From this folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/jessicaj06/jessicaj06.github.io.git
git push -u origin main
```

> ⚠️ Set your git identity to your portfolio account before committing if this
> machine is shared:
> ```bash
> git config user.name "jessicaj06"
> git config user.email "jessicalake0615@gmail.com"
> ```

### 3. Turn on Pages (GitHub Actions)

In the repo on GitHub: **Settings → Pages → Build and deployment → Source** and
choose **GitHub Actions**.

That's it. The included workflow
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) builds the site
and publishes it on every push to `main`. After the first run finishes (~1–2
min, watch the **Actions** tab), your site is live at:

**https://jessicaj06.github.io**

---

## 📁 Project structure

```
src/
  data.ts            ← edit this for all your content
  App.tsx            ← page layout / section order
  index.css          ← theme tokens (colors, fonts) + global styles
  components/
    Background.tsx    animated particle + grid backdrop
    Nav.tsx           sticky navbar
    Hero.tsx          landing section
    About.tsx         about + "currently learning" terminal
    Skills.tsx        skill bars
    Projects.tsx      project cards
    Contact.tsx       contact call-to-action
    Footer.tsx
.github/workflows/deploy.yml  ← auto-deploy to GitHub Pages
```

---

## ℹ️ Notes

- This is configured as a **user site** (`base: '/'` in `vite.config.ts`). If
  you ever host it from a normal *project* repo instead (e.g.
  `github.com/jessicaj06/portfolio`), change `base` to `'/portfolio/'` so asset
  paths resolve.
- The animated background respects `prefers-reduced-motion`.
