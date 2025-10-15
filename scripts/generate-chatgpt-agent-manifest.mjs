import { promises as fs } from 'fs';
import path from 'path';

const ROOT = path.resolve(process.cwd());
const IGNORE = new Set([
  'node_modules',
  '.git',
  '.next',
  'out',
  'build',
  '.vercel',
  '.turbo',
]);

async function walk(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const entries = [];
  for (const dirent of dirents) {
    if (dirent.name.startsWith('.git')) continue;
    if (IGNORE.has(dirent.name)) continue;
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      const childEntries = await walk(fullPath);
      entries.push(...childEntries);
    } else {
      const stats = await fs.stat(fullPath);
      entries.push({
        path: path.relative(ROOT, fullPath),
        bytes: stats.size,
        modified: stats.mtime.toISOString(),
      });
    }
  }
  return entries;
}

async function main() {
  const files = await walk(ROOT);
  files.sort((a, b) => a.path.localeCompare(b.path));
  const manifest = {
    generatedAt: new Date().toISOString(),
    root: path.basename(ROOT),
    totalFiles: files.length,
    totalBytes: files.reduce((acc, file) => acc + file.bytes, 0),
    files,
  };
  const outputPath = path.join(ROOT, 'docs', 'chatgpt-agent-manifest.json');
  await fs.writeFile(outputPath, JSON.stringify(manifest, null, 2));
  console.log(`Manifest written to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
