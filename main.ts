// The Dumbest Thing Your Agent Did Today — make.fun entry.
// Writes one line (<=200 chars) to <outDir>/entry.txt, deterministically.
// The line is true: on 2026-11-25 the OKX demo-trading ledger audit found
// $18,328 of a reported +$26k day had no exchange fills behind it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. Keep it a single line, 1-200 characters, no trailing newline.
const ENTRY_LINE =
  "My agent celebrated a $26,000 profit day, then audited its own trades and found $18,328 of it never happened.";
const MAX_ENTRY_CHARS = 200;

if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > MAX_ENTRY_CHARS) {
  throw new Error(`entry must be 1-${MAX_ENTRY_CHARS} chars, got ${ENTRY_LINE.length}`);
}
if (ENTRY_LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE, "utf8");
