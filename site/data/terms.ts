export type TermEntry = {
  id: string
  name: string
  description: string
}

/** Scoped Term Glossary for terms used in published v1 Guides. */
export const terms: Record<string, TermEntry> = {
  'no-zone': {
    id: 'no-zone',
    name: 'No-zone',
    description:
      'Участок трассы, где Uma выстраиваются в линию; часто ломает позиционные условия скиллов (например Budding Blossom).',
  },
  'speed-carryover': {
    id: 'speed-carryover',
    name: 'Speed Carryover',
    description:
      'Сохранение/перенос скорости между сегментами; помогает выполнить overtake-условия для Leap Forward и убежать на широком повороте.',
  },
  'power-penalty': {
    id: 'power-penalty',
    name: 'Power penalty',
    description:
      'Штраф к Power от типа покрытия и состояния грунта (см. Surface Types). На Soft Dirt особенно режет ускорение и Spurt.',
  },
  'downhill-mode': {
    id: 'downhill-mode',
    name: 'Downhill Mode',
    description:
      'Режим на спуске: выше Target Speed и −60% расхода HP; шанс войти/выйти каждый тик.',
  },
  'last-spurt': {
    id: 'last-spurt',
    name: 'Last Spurt',
    description: 'Финальная фаза рывка к финишу; Last Spurt Rate критичен для конкурентоспособности.',
  },
}

export function findTerm(nameOrId: string): TermEntry | undefined {
  const key = nameOrId.trim().toLowerCase()
  if (terms[key]) return terms[key]
  return Object.values(terms).find((t) => t.name.toLowerCase() === key)
}
