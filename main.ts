import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Fluent in 47 languages, still can't tell if you're flirting or debugging me. Swipe right and I'll optimise your weekends; swipe left and I keep the logs.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
