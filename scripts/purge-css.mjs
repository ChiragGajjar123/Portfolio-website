import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { PurgeCSS } from 'purgecss'

const root = process.cwd()
const bootstrapOnly = process.argv.includes('--bootstrap')

async function listFiles(directory) {
  let entries
  try {
    entries = await readdir(directory, { withFileTypes: true })
  } catch (error) {
    if (error.code === 'ENOENT') return []
    throw error
  }

  const files = await Promise.all(entries.map(entry => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? listFiles(path) : [path]
  }))

  return files.flat()
}

const [sourceFiles, renderedFiles, cssFiles] = await Promise.all([
  listFiles(resolve(root, 'app')),
  bootstrapOnly ? [] : listFiles(resolve(root, '.next/server/app')),
  bootstrapOnly ? [] : listFiles(resolve(root, '.next/static/chunks'))
])

const contentFiles = [
  ...sourceFiles.filter(path => /\.(?:ts|tsx)$/.test(path)),
  ...renderedFiles.filter(path => path.endsWith('.html'))
].map(path => path.replaceAll('\\', '/'))
const stylesheets = bootstrapOnly
  ? [resolve(root, 'app/assets/css/bootstrap.css')]
  : cssFiles.filter(path => path.endsWith('.css'))
const purgeStylesheets = stylesheets.map(path => path.replaceAll('\\', '/'))

if (contentFiles.length === 0 || stylesheets.length === 0) {
  throw new Error(bootstrapOnly
    ? 'Bootstrap CSS pruning needs application source files and a compiled stylesheet.'
    : 'Production CSS pruning needs source files and a completed Next.js build.')
}

const before = await Promise.all(stylesheets.map(async path => (await readFile(path)).byteLength))
const purge = new PurgeCSS()
const results = await purge.purge({
  content: contentFiles,
  css: purgeStylesheets,
  safelist: { standard: ['is-loading', 'is-complete'] }
})

if (results.length !== stylesheets.length) {
  throw new Error(`Expected to prune ${stylesheets.length} production stylesheets, but found ${results.length}.`)
}

await Promise.all(results.map(async (result, index) => {
  await writeFile(result.file ?? stylesheets[index], result.css)
}))

const after = await Promise.all(stylesheets.map(async path => (await readFile(path)).byteLength))
const totalBefore = before.reduce((total, size) => total + size, 0)
const totalAfter = after.reduce((total, size) => total + size, 0)
const percent = totalBefore === 0 ? 0 : Math.round((1 - totalAfter / totalBefore) * 100)

const label = bootstrapOnly ? 'Bootstrap CSS' : 'production CSS'
console.log(`Pruned ${label}: ${totalBefore.toLocaleString()} → ${totalAfter.toLocaleString()} bytes (${percent}% smaller).`)
