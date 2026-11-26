import skillsByIdJson from './skills-by-id.json'
import skillsByNameJson from './skills-by-name.json'

export type SkillEntry = {
  id: string
  name: string
  description: string
  iconId?: number | null
  nameJp?: string
  effectSummary?: string
}

const skillsById = skillsByIdJson as Record<string, SkillEntry>
const skillsByName = skillsByNameJson as Record<string, string>

/**
 * Guide slug / EN label → skillId.
 * Overrides needed when Upstream EN names collide (Lightning Surge → 電光石火).
 */
const slugToId: Record<string, string> = {
  'lightning-surge': '202401',
  'lightning surge': '202401',
  'halfway-to-a-dream': '210072',
  'halfway to a dream': '210072',
  'angling-and-scheming': '100201',
  'angling and scheming': '100201',
  'victoria-por-plancha': '100141',
  'victoria por plancha ☆': '100141',
  'budding-blossom': '100511',
  'budding blossom': '100511',
  'louder-tracen-cheer': '110611',
  'louder! tracen cheer!': '110611',
  'forward-march': '201682',
  'forward, march!': '201682',
  acceleration: '201062',
  'got-the-spirit': '202312',
  'got the spirit!': '202312',
  'final-push': '200552',
  'final push': '200552',
  'head-on': '201902',
  'neck-and-neck': '201901',
  'neck and neck': '201901',
  'leap-forward': '202402',
  'leap forward': '202402',
  'straightaway-spurt': '200642',
  'straightaway spurt': '200642',
  'mile-maven': '200681',
  'mile maven': '200681',
  'top-runner': '201271',
  'top runner': '201271',
  'shadow-break': '100161',
  'shadow break': '100161',
  nemesis: '100501',
  'luck-runs-my-way': '100981',
  'luck runs my way': '100981',
  'give-mummy-a-hug': '110451',
  'give mummy a hug ♡': '110451',
  'sharp-steps': '202492',
  'sharp steps': '202492',
  'razor-sharp-steps': '202491',
  'razor-sharp steps': '202491',
  'see-ya-later': '201662',
  'see ya later!': '201662',
  'playtimes-over': '201661',
  "playtime's over!": '201661',
  'i-wanna-win-with-you': '210071',
  'i wanna win with you': '210071',
  'full-speed': '202281',
  'full speed!': '202281',
  'full-tilt': '202282',
  'full tilt': '202282',
  concentration: '200431',
  focus: '200432',
  'come-what-may': '201701',
  'come what may': '201701',
  'all-ive-got': '201702',
  "all i've got": '201702',
  trackblazer: '200711',
  'rosy-outlook': '200712',
  'rosy outlook': '200712',
  'lane-legerdemain': '200501',
  'lane legerdemain': '200501',
}

function normalizeName(s: string): string {
  return s.trim().toLowerCase()
}

export function findSkill(nameOrId: string): SkillEntry | undefined {
  const raw = nameOrId.trim()
  if (!raw) return undefined

  if (/^\d+$/.test(raw) && skillsById[raw]) return skillsById[raw]

  const key = normalizeName(raw)
  const directId = slugToId[key]
  if (directId && skillsById[directId]) return skillsById[directId]

  const id = skillsByName[key]
  if (id && skillsById[id]) return skillsById[id]

  const loose = key.replace(/[^\p{L}\p{N}]+/gu, '')
  for (const [k, sid] of Object.entries(slugToId)) {
    if (k.replace(/[^\p{L}\p{N}]+/gu, '') === loose && skillsById[sid]) return skillsById[sid]
  }
  for (const [n, sid] of Object.entries(skillsByName)) {
    if (n.replace(/[^\p{L}\p{N}]+/gu, '') === loose) return skillsById[sid]
  }
  return undefined
}

export function skillIconSrc(skill: SkillEntry | undefined): string | null {
  if (!skill?.iconId) return null
  return `/icon/skill/utx_ico_skill_${skill.iconId}.webp`
}
