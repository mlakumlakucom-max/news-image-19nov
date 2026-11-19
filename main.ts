// The World in One Day — make.fun news-image-20261119 entry (Node 22, stdlib only).
// The finished front page is entry.png beside this file; the program copies it to
// the grader's output directory as /output/entry.png. Nothing is drawn at run time,
// nothing is fetched, and the same bytes are written on every run.
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
