# 🧾 How to Update HOA Announcements (Board Instructions)

This website is designed so that **board members only need to edit ONE file** to publish or update announcements.

**No coding knowledge is required.**

---

## ✅ The Only File You Need to Edit

`src/data/announcements.json`

You do **NOT** need to edit:
- React code
- Configuration files
- GitHub Actions
- Any other folders

---

## ✏️ How to Edit an Announcement

### Step 1: Open the file
1. Go to the GitHub repository.
2. Navigate to:
   - `src` → `data` → `announcements.json`
3. Click the **pencil (Edit)** button.

---

### Step 2: Add or update an entry

The file is a **list** (an array) of announcements. Each announcement looks like this:

```json
{
  "id": 3,
  "title": "Community Notice – April 2026",
  "date": "2026-04-01",
  "summary": "Brief description shown on the website.",
  "link": "docs/2026-04-notice.pdf"
}
```

#### Field rules
- **id**: number, must be unique (no duplicates)
- **title**: short title
- **date**: format `YYYY-MM-DD` (example: `2026-04-01`)
- **summary**: 1–2 sentences
- **link**: optional (PDF or document path). If you don’t have a file, you can remove this line.

---

### Step 3: Save your changes
1. Scroll down.
2. Enter a short message like:
   - `Update April announcement`
3. Click **Commit changes**.

---

## 🚀 What Happens Next (Automatically)
- The website rebuilds automatically.
- If the file is valid → the site updates.
- If there is a mistake → the site is **NOT** published and GitHub will show an error in the checks.

You do not need to run anything manually.

---

## ⚠️ Important Rules
- Do **NOT** remove brackets `{ }` or commas `,`
- Do **NOT** rename the file
- Do **NOT** edit other files unless instructed

If something goes wrong, contact the person who set up the site.

---

## 🧠 Tip
If you are unsure, copy an existing announcement entry and edit only the text.

