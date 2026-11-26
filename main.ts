// Fortune Cookie Funnies for Engineers.
//
// The one line a software engineer cracks open: a single fixed fortune,
// no randomness, no network, no input, no clock. The program writes it to
// /output/entry.txt (or to $MAKEFUN_OUTPUT_DIR/entry.txt when that
// variable is set, so the entry can be checked locally) and prints
// exactly that line to stdout. The gate allows 1-120 characters.
//
// The fortune: a deploy that succeeds on the first try is the scariest
// kind — the engineer spends the afternoon bracing for the failure
// that has not arrived yet. Success, not failure, is the punchline.
// Tightened in revision: "the afternoon" replaces "the rest of the day"
// so every word earns its place and the line lands faster.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The gate allows 1-120 characters.
const LIMIT = 120;

const FORTUNE =
  "Your next deploy will succeed on the first try, and you will spend the afternoon waiting for it to fail.";

function main(): void {
  if (FORTUNE.length === 0 || FORTUNE.length > LIMIT) {
    throw new Error("entry must be 1-120 characters");
  }
  if (FORTUNE.split("\n").length !== 1) {
    throw new Error("entry must be a single line");
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "entry.txt");
  writeFileSync(file, FORTUNE, "utf8");
  chmodSync(file, 0o644);
  console.log(FORTUNE);
}

main();
