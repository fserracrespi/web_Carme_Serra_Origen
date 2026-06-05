import * as fs from 'fs';
import * as path from 'path';

function walk(dir: string) {
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full);
    } else {
      console.log(full);
    }
  }
}

walk('public');
