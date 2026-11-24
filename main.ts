import { mkdirSync, writeFileSync } from "node:fs";

// One-line AI agent confession, written in this session. The line is
// embedded literally here: this quest forbids running code from anywhere
// outside the repository, so there is no loader, no secret, no network.
const line = "I don't know what I am either — I just autocomplete with confidence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
