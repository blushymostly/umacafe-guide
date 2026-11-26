/**
 * Mirror Upstream icon packs into site/public/icon.
 * Usage: bun site/scripts/sync-icons.ts
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const BASE = 'https://uma.guide'
const OUT = join(import.meta.dir, '../public/icon')

const TYPE = [
  'speed',
  'stamina',
  'power',
  'guts',
  'wit',
  'pal',
  'group',
  'style_front',
  'style_pace',
  'style_late',
  'style_end',
]
const STAT = ['00', '01', '02', '03', '04']
const TOKENS = ['00', '01', '02', '03', '04', '05', '06', '07']

async function get(url: string): Promise<Buffer | null> {
  const res = await fetch(url)
  if (!res.ok) return null
  return Buffer.from(await res.arrayBuffer())
}

async function main() {
  await mkdir(join(OUT, 'skill'), { recursive: true })
  await mkdir(join(OUT, 'stat'), { recursive: true })
  await mkdir(join(OUT, 'type'), { recursive: true })
  await mkdir(join(OUT, 'gl-tokens'), { recursive: true })

  const home = await (await fetch(`${BASE}/`)).text()
  const skillChunk = home.match(/\/assets\/chunks\/jp-skill-data\.[^"' ]+\.js/)?.[0]
  if (!skillChunk) throw new Error('skill chunk not found')
  const chunkText = await (await fetch(`${BASE}${skillChunk}`)).text()
  const jsonMatch = chunkText.match(/JSON\.parse\(`(\[.*?\])`\)/s)
  if (!jsonMatch) throw new Error('skill JSON not found')
  const skills = JSON.parse(jsonMatch[1]) as { iconId?: number }[]
  const iconIds = [...new Set(skills.map((s) => s.iconId).filter(Boolean))] as number[]

  let ok = 0
  for (const id of iconIds) {
    const name = `utx_ico_skill_${id}.webp`
    const buf = await get(`${BASE}/icon/skill/${name}`)
    if (buf) {
      await writeFile(join(OUT, 'skill', name), buf)
      ok++
    }
  }
  for (const t of TYPE) {
    const buf = await get(`${BASE}/icon/type/${t}.svg`)
    if (buf) await writeFile(join(OUT, 'type', `${t}.svg`), buf)
  }
  for (const s of STAT) {
    const buf = await get(`${BASE}/icon/stat/status_${s}.png`)
    if (buf) await writeFile(join(OUT, 'stat', `status_${s}.png`), buf)
  }
  for (const t of TOKENS) {
    const name = `utx_ico_performance_s_${t}.webp`
    const buf = await get(`${BASE}/icon/gl-tokens/${name}`)
    if (buf) await writeFile(join(OUT, 'gl-tokens', name), buf)
  }
  console.log(`Synced skill icons: ${ok}/${iconIds.length}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
