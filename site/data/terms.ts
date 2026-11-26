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
  'performance-points': {
    id: 'performance-points',
    name: 'Performance Points',
    description:
      'Валюта Grand Concert (Dance, Passion, Vocal, Visual, Composure) для покупки Lessons (Techniques и Songs).',
  },
  'hype-level': {
    id: 'hype-level',
    name: 'Hype Level',
    description:
      'Прогресс к следующему Concert; заполняется Lessons. Нужно 3 Songs для Great Success.',
  },
  'mastery-bonus': {
    id: 'mastery-bonus',
    name: 'Mastery Bonus',
    description:
      'Мгновенный бонус Lesson (статы, SP, Energy, Training bonus) — действует сразу после покупки.',
  },
  'concert-bonus': {
    id: 'concert-bonus',
    name: 'Concert Bonus',
    description:
      'Бонус Song, который включается после следующего Concert и действует до конца карьеры (Friendship, Speciality Priority, Chain Events).',
  },
  'song-saving': {
    id: 'song-saving',
    name: 'Song Saving',
    description:
      'Не купить Song до Concert, а взять его после: считается в прогрессии к следующему Song, но Concert Bonus сдвигается на один Concert.',
  },
  'great-success': {
    id: 'great-success',
    name: 'Great Success',
    description:
      'Успех Concert при ≥3 Songs: +10 ко всем статам (иначе +3). Также даёт SP за Lessons между Concerts.',
  },
  'friendship-training': {
    id: 'friendship-training',
    name: 'Friendship Training',
    description:
      'Rainbow/дружба на Facility: в Grand Concert даёт два типа Performance Points (один от Training, второй чаще — самый дефицитный).',
  },
  'scenario-link': {
    id: 'scenario-link',
    name: 'Scenario Link',
    description:
      'Сценарно связанные персонажи/карты: в Grand Concert — Light Hello, Agnes Tachyon, Silence Suzuka, Mihono Bourbon, Smart Falcon; усиливают Performance Points и rewards.',
  },
  'speciality-priority': {
    id: 'speciality-priority',
    name: 'Speciality Priority',
    description:
      'Шанс появления Support на «своём» Facility; Songs с Speciality Priority Up поднимают его у всех карт в колоде.',
  },
}

export function findTerm(nameOrId: string): TermEntry | undefined {
  const key = nameOrId.trim().toLowerCase()
  if (terms[key]) return terms[key]
  return Object.values(terms).find((t) => t.name.toLowerCase() === key)
}
