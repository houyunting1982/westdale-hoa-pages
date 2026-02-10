import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const ANNOUNCEMENTS_PATH = path.join(ROOT, "src", "data", "announcements.json");

function fail(errors) {
  console.error("❌ announcements.json validation failed:\n");
  for (const e of errors) console.error(`- ${e}`);
  console.error("\nFix the file and push again. The site will not deploy until this passes.");
  process.exit(1);
}

function isPlainObject(v) {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function hasOnlyAllowedKeys(obj, allowedKeys) {
  return Object.keys(obj).every((k) => allowedKeys.has(k));
}

function isNonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

function isFiniteNumber(v) {
  return typeof v === "number" && Number.isFinite(v);
}

async function main() {
  const errors = [];

  let raw;
  try {
    raw = await fs.readFile(ANNOUNCEMENTS_PATH, "utf8");
  } catch (e) {
    fail([`Cannot read file: ${ANNOUNCEMENTS_PATH}`, String(e?.message ?? e)]);
  }

  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    fail([
      `Invalid JSON (file must be valid JSON): src/data/announcements.json`,
      String(e?.message ?? e),
    ]);
  }

  if (!Array.isArray(data)) {
    fail([`Root must be an array ([])`]);
  }

  const allowedKeys = new Set(["id", "title", "date", "summary", "link"]);
  const dateRe = /^\d{4}-\d{2}-\d{2}$/;
  const seenIds = new Set();

  data.forEach((item, idx) => {
    const prefix = `Item ${idx} (index ${idx})`;

    if (!isPlainObject(item)) {
      errors.push(`${prefix}: must be an object { ... }`);
      return;
    }

    if (!hasOnlyAllowedKeys(item, allowedKeys)) {
      const extra = Object.keys(item).filter((k) => !allowedKeys.has(k));
      errors.push(`${prefix}: contains unknown field(s): ${extra.join(", ")}`);
    }

    if (!("id" in item)) errors.push(`${prefix}: missing required field "id"`);
    if (!("title" in item)) errors.push(`${prefix}: missing required field "title"`);
    if (!("date" in item)) errors.push(`${prefix}: missing required field "date"`);
    if (!("summary" in item)) errors.push(`${prefix}: missing required field "summary"`);

    if ("id" in item) {
      if (!isFiniteNumber(item.id)) {
        errors.push(`${prefix}: "id" must be a number`);
      } else if (seenIds.has(item.id)) {
        errors.push(`${prefix}: "id" must be unique (duplicate: ${item.id})`);
      } else {
        seenIds.add(item.id);
      }
    }

    if ("title" in item && !isNonEmptyString(item.title)) {
      errors.push(`${prefix}: "title" must be a non-empty string`);
    }

    if ("summary" in item && !isNonEmptyString(item.summary)) {
      errors.push(`${prefix}: "summary" must be a non-empty string`);
    }

    if ("date" in item) {
      if (!isNonEmptyString(item.date) || !dateRe.test(item.date)) {
        errors.push(`${prefix}: "date" must be in YYYY-MM-DD format`);
      }
    }

    if ("link" in item && !(item.link === undefined || item.link === null)) {
      if (!isNonEmptyString(item.link)) {
        errors.push(`${prefix}: "link" must be a string (or remove it)`);
      }
    }
  });

  if (errors.length) fail(errors);

  console.log("✅ announcements.json looks valid.");
}

main().catch((e) => fail([String(e?.stack ?? e)]));

