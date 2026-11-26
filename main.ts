// The Worst Pizza Topping — "Try our durian pizza"
// Writes the joke line to /output/entry.txt.
// The line is 114 characters: a pitch frame, a genuinely terrible
// topping (durian, notorious for its smell), and a twist in the tail.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Try our durian pizza: the topping smells so bad the delivery driver leaves it on the curb and texts you good luck.";

// The gate allows 1 to 200 characters; fail loudly rather than submit an
// over-long line. Verified: the line is 114 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
