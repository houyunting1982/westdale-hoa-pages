## 🏠 Westdale HOA Announcements Site

A simple, reliable, and free announcement website for the HOA board, built with **React + Vite** and hosted on **GitHub Pages**.

This site is intended for:
- Publishing HOA announcements
- Sharing meeting notices and PDFs
- Providing a stable public URL with zero server maintenance

---

## ✨ What This Is (and Is Not)

### ✅ What this site does
- Displays HOA announcements in a clean web UI
- Is **static** (no backend, no database)
- Is **free to host**
- Keeps **full history** of changes via Git
- Can be updated by editing a single JSON file

### ❌ What this site does NOT do
- No user login
- No private data storage
- No dynamic server logic
- No paid hosting or subscriptions

---

## 🧠 High-Level Architecture

Browser  
↓  
GitHub Pages  
↓  
Static React site (Vite build output)  
↓  
`announcements.json` (content)

- UI is written once
- Content is updated independently
- Hosting is handled entirely by GitHub

---

## 📁 Project Structure

```text
<repo-root>/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── wd-logo.png
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── pages/
    │   ├── Home.jsx
    │   └── Announcements.jsx
    ├── components/
    │   └── AnnouncementCard.jsx
    └── data/
        └── announcements.json
```

---

## 📝 How to Update Announcements (Most Common Task)

> **This is the only file that usually needs editing**

### File
`src/data/announcements.json`

### Example

```json
[
  {
    "id": 1,
    "title": "HOA Board Meeting – March 2026",
    "date": "2026-03-10",
    "summary": "Summary of decisions made during the March board meeting.",
    "link": "docs/2026-03-meeting.pdf"
  }
]
```

After editing:
- Save the file
- Commit and deploy (see below)

---

## 🚀 Local Development

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open:
- `http://localhost:5173`

---

## 📦 Build & Deploy to GitHub Pages

### Build the site

```bash
npm run build
```

### Deploy

```bash
npm run deploy
```

This publishes the site to the `gh-pages` branch, which GitHub Pages serves.

---

## 🌍 Live Site

Configured via `homepage` in `package.json`:
- `https://houyunting1982.github.io/westdale-hoa-pages`

If you move/rename the repo or change GitHub org/user, update `homepage` (and `vite.config.js` `base`) to match.

---

## ⚙️ GitHub Pages Configuration

In GitHub:
- Repo → Settings → Pages
- Source: `gh-pages` branch

---

## 🔧 Common Gotchas

### 1) White screen after deploy
Check `vite.config.js` and ensure the `base` matches your GitHub repo name (and `package.json` `homepage` is correct).

This repo currently uses:
- `base: "/westdale-hoa-pages/"`

### 2) `@vitejs/plugin-react` not found

```bash
npm install -D @vitejs/plugin-react
```

### 3) `npm run deploy` fails
Make sure this directory is a Git repo and has at least one commit:

```bash
git init
git add .
git commit -m "Initial commit"
```

---

## 👥 Handoff / Maintenance Notes

- This repo should ideally live under a GitHub Organization, not a personal account.
- Board members do not need to understand React.
- Editing announcements requires only basic JSON editing.
- All changes are tracked and reversible.

---

## 🎯 Design Philosophy

This project intentionally favors:
- Low maintenance
- High reliability
- Zero hosting cost
- No “hero dependency”

The goal is to build it once and let it quietly work for years.

---

## 📄 License / Ownership

- Content belongs to the HOA.
- Technical structure is standard open-source tooling.
