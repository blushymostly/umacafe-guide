import indexJson from './support-cards-index.json'
import byIdJson from './support-cards-by-id.json'

export type SupportCardIndexEntry = {
  id: number
  charaId: number
  charaName: string
  title: string
  rarity: number
  rarityDisplay: string
  type: number
  typeName: string
}

export type SupportCardDetail = SupportCardIndexEntry & {
  effects: { name: string; init: number | null; lv50: number | null; lv45: number | null; lv35: number | null; lv15: number | null }[]
  skillHints: { skillId: number; skillName: string; level?: number }[]
  uniqueEffect: Record<string, unknown> | null
  art: string
}

export const supportCardIndex = indexJson as SupportCardIndexEntry[]
export const supportCardsById = byIdJson as Record<string, SupportCardDetail>

export function findSupportCard(id: number | string): SupportCardDetail | undefined {
  return supportCardsById[String(id)]
}

export function typeIconPath(typeName: string): string {
  const map: Record<string, string> = {
    Speed: 'speed',
    Stamina: 'stamina',
    Power: 'power',
    Guts: 'guts',
    Intelligence: 'wit',
    Wit: 'wit',
    Friend: 'pal',
    Group: 'group',
  }
  const key = map[typeName] ?? 'speed'
  return `/icon/type/${key}.svg`
}
