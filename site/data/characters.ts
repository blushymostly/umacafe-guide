import byIdJson from './characters-by-id.json'
import charaNamesEnJson from './chara-names-en.json'

export type CharacterEntry = {
  charaId: number
  charaName: string
  enName?: string
  cardId?: number
  cardTitle: string
  voiceActor: string
  stats: Record<string, number | null | undefined>
  aptitudes: Record<string, string | null | undefined>
}

/** EN display name → charaId and/or supportCardId for Guide mentions / pals. */
export const enCharacterAliases: Record<
  string,
  { enName: string; charaId?: number; supportCardId?: number }
> = {
  'light hello': { enName: 'Light Hello', charaId: 9008, supportCardId: 30052 },
  'agnes tachyon': { enName: 'Agnes Tachyon', charaId: 1032, supportCardId: 30101 },
  'silence suzuka': { enName: 'Silence Suzuka', charaId: 1002 },
  'mihono bourbon': { enName: 'Mihono Bourbon', charaId: 1026 },
  'smart falcon': { enName: 'Smart Falcon', charaId: 1046 },
  'oguri cap': { enName: 'Oguri Cap', charaId: 1006 },
  'kitasan black': { enName: 'Kitasan Black', charaId: 1068, supportCardId: 30028 },
  'fine motion': { enName: 'Fine Motion', charaId: 1022, supportCardId: 30010 },
  'super creek': { enName: 'Super Creek', charaId: 1045, supportCardId: 30016 },
  'curren chan': { enName: 'Curren Chan', charaId: 1038, supportCardId: 20044 },
  'maruzensky': { enName: 'Maruzensky', charaId: 1004, supportCardId: 30107 },
  'el condor pasa': { enName: 'El Condor Pasa', charaId: 1016 },
  'manhattan cafe': { enName: 'Manhattan Cafe', charaId: 1042 },
  'marvelous sunday': { enName: 'Marvelous Sunday', charaId: 1035 },
  'mr. c.b.': { enName: 'Mr. C.B.', charaId: 1057, supportCardId: 30097 },
  'daiwa scarlet': { enName: 'Daiwa Scarlet', charaId: 1009 },
}

export const charactersById = byIdJson as Record<string, CharacterEntry>
export const charaNamesEn = charaNamesEnJson as Record<string, string>

export function findCharacter(nameOrId: string): {
  enName: string
  entry?: CharacterEntry
  supportCardId?: number
} | undefined {
  const key = nameOrId.trim().toLowerCase()
  if (/^\d+$/.test(key)) {
    const entry = charactersById[key]
    const enName = charaNamesEn[key] || entry?.enName || entry?.charaName
    if (!entry && !enName) return undefined
    return { enName: enName || key, entry }
  }
  const alias = enCharacterAliases[key]
  if (!alias) {
    // Try reverse lookup from EN dict values
    const hit = Object.entries(charaNamesEn).find(([, n]) => n.toLowerCase() === key)
    if (hit) {
      const entry = charactersById[hit[0]]
      return { enName: hit[1], entry }
    }
    return undefined
  }
  const entry = alias.charaId != null ? charactersById[String(alias.charaId)] : undefined
  return { enName: alias.enName, entry, supportCardId: alias.supportCardId }
}
