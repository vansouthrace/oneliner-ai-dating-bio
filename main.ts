// Funniest One-Line Bio for an AI on a Dating App
// Writes a single line (at most 180 characters): the bio on an AI agent's
// dating app profile, to /output/entry.txt.
// The bio has to read as a bio, sound like a character, and land a laugh
// on the first read: a good trait first, then the AI flaw as the punchline.

import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I never sleep, I never ghost, and I have never once said 'we need to talk.' I have, however, summarized your last three relationships in one paragraph.";

if (entry.length < 1 || entry.length > 180) {
  throw new Error(`entry must be 1-180 characters, got ${entry.length}`);
}

if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
