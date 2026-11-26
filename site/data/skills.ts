export type SkillEntry = {
  id: string
  name: string
  description: string
  /** Upstream /icon/skill/utx_ico_skill_{iconId}.webp when known */
  iconId?: number
}

/** Scoped Skill Data: only skills referenced in published v1 Guides. */
export const skills: Record<string, SkillEntry> = {
  'angling-and-scheming': {
    id: 'angling-and-scheming',
    name: 'Angling and Scheming',
    description:
      'Ускорение на финальной прямой / в зоне ускорения для Front Runner. Ключевой corner/final accel.',
  },
  'victoria-por-plancha': {
    id: 'victoria-por-plancha',
    name: 'Victoria por plancha ☆',
    description: 'Сильное ускорение на финальной прямой при выполнении условий позиции.',
  },
  'budding-blossom': {
    id: 'budding-blossom',
    name: 'Budding Blossom',
    description:
      'Ускорение с условием бокового блока / позиции; на Tokyo Mile часто срывается из‑за No-zone.',
  },
  'louder-tracen-cheer': {
    id: 'louder-tracen-cheer',
    name: 'Louder! Tracen Cheer!',
    description: 'Ускорение для задних стилей; зависит от предпосылок и состава лобби.',
  },
  'forward-march': {
    id: 'forward-march',
    name: 'Forward, March!',
    description: 'Случайный accel; доступен всем стилям через Grand Concert Shop.',
    iconId: 20142,
  },
  acceleration: {
    id: 'acceleration',
    name: 'Acceleration',
    description: 'Ускорение с условием смены позиции; требует планирования mid-race velocity.',
  },
  'got-the-spirit': {
    id: 'got-the-spirit',
    name: 'Got the Spirit!',
    description: 'Дополнительный accel; полезен против догоняющих сзади.',
  },
  'final-push': {
    id: 'final-push',
    name: 'Final Push',
    description: 'Ускорение в середине/конце; может сработать слишком рано на mid-race.',
  },
  'head-on': {
    id: 'head-on',
    name: 'Head-On',
    description: 'Secondary accel; часто с карт вроде Agnes Tachyon.',
  },
  'neck-and-neck': {
    id: 'neck-and-neck',
    name: 'Neck and Neck',
    description: 'Secondary accel; доступен с карт вроде K.S.Miracle / Daiwa Scarlet.',
  },
  'leap-forward': {
    id: 'leap-forward',
    name: 'Leap Forward',
    description: 'Надёжный backliner accel при выполнении overtake-mode.',
  },
  'lightning-surge': {
    id: 'lightning-surge',
    name: 'Lightning Surge',
    description: 'Пара к Leap Forward; сильный mid/late accel для Late/End.',
  },
  'straightaway-spurt': {
    id: 'straightaway-spurt',
    name: 'Straightaway Spurt',
    description: 'Помогает End Closers стабильно триггерить Leap Forward / Lightning Surge.',
  },
  'mile-maven': {
    id: 'mile-maven',
    name: 'Mile Maven',
    description: 'Ранняя скорость на mile; помогает Front/Pace занять позицию.',
  },
  'top-runner': {
    id: 'top-runner',
    name: 'Top Runner',
    description: 'Ранний velocity для удержания передней позиции.',
  },
  'shadow-break': {
    id: 'shadow-break',
    name: 'Shadow Break',
    description: 'Final corner velocity; помогает выполнить условие Leap Forward.',
  },
  nemesis: {
    id: 'nemesis',
    name: 'Nemesis',
    description: 'Velocity на финальном повороте; синергия с overtake accel.',
  },
  'luck-runs-my-way': {
    id: 'luck-runs-my-way',
    name: 'Luck Runs My Way',
    description: 'Гарантированный mid-race velocity (Copano Rickey); силён на широком Tokyo corner.',
  },
  'give-mummy-a-hug': {
    id: 'give-mummy-a-hug',
    name: 'Give Mummy a Hug ♡',
    description: 'Viable Pace accel, но Super Creek плохо стыкуется с Dirt Mile Uma.',
  },
  'sharp-steps': {
    id: 'sharp-steps',
    name: 'Sharp Steps',
    description: 'Строгое условие ≤5-го места до late-race; обычно не рекомендуется.',
  },
  'razor-sharp-steps': {
    id: 'razor-sharp-steps',
    name: 'Razor-Sharp Steps',
    description: 'Усиленная версия Sharp Steps; короткая длительность, жёсткие условия.',
  },
  'see-ya-later': {
    id: 'see-ya-later',
    name: 'See Ya Later!',
    description:
      'Золотая версия Playtime\'s Over!; hint от Light Hello. Сильно рекомендуется в Grand Concert.',
    iconId: 20012,
  },
  'playtimes-over': {
    id: 'playtimes-over',
    name: "Playtime's Over!",
    description: 'Белая версия See Ya Later!; mid/late velocity при выполнении условий.',
    iconId: 20011,
  },
  'i-wanna-win-with-you': {
    id: 'i-wanna-win-with-you',
    name: 'I Wanna Win with You',
    description:
      'Золотой Scenario Skill Grand Concert: при ≥18 Songs к Girls\' Legend U. Усиливает позднюю часть заезда.',
    iconId: 20152,
  },
  'halfway-to-a-dream': {
    id: 'halfway-to-a-dream',
    name: 'Halfway to a Dream',
    description:
      'Белый Scenario Skill, если <18 Songs к Girls\' Legend U. Speed + accel во второй половине при ≤6-м месте.',
    iconId: 20151,
  },
  'full-speed': {
    id: 'full-speed',
    name: 'Full Speed!',
    description: 'Золотой hint Smart Falcon (Scenario reward при ≥16 Songs).',
    iconId: 20012,
  },
  'full-tilt': {
    id: 'full-tilt',
    name: 'Full Tilt',
    description: 'Белая версия Full Speed! без Scenario-linked Smart Falcon.',
    iconId: 20011,
  },
  concentration: {
    id: 'concentration',
    name: 'Concentration',
    description: 'Золотой hint Mihono Bourbon (Scenario reward).',
    iconId: 20062,
  },
  focus: {
    id: 'focus',
    name: 'Focus',
    description: 'Белая версия Concentration.',
    iconId: 20061,
  },
  'come-what-may': {
    id: 'come-what-may',
    name: 'Come What May',
    description: 'Золотой hint Agnes Tachyon (Scenario reward).',
    iconId: 20012,
  },
  'all-ive-got': {
    id: 'all-ive-got',
    name: "All I've Got",
    description: 'Белая версия Come What May.',
    iconId: 20011,
  },
  trackblazer: {
    id: 'trackblazer',
    name: 'Trackblazer',
    description: 'Золотой hint Silence Suzuka (Scenario reward).',
    iconId: 20022,
  },
  'rosy-outlook': {
    id: 'rosy-outlook',
    name: 'Rosy Outlook',
    description: 'Белая версия Trackblazer.',
    iconId: 20021,
  },
  'lane-legerdemain': {
    id: 'lane-legerdemain',
    name: 'Lane Legerdemain',
    description: 'Золотой hint без Scenario-linked персонажей (Scenario reward ≥16 Songs).',
    iconId: 20052,
  },
}

export function findSkill(nameOrId: string): SkillEntry | undefined {
  const key = nameOrId.trim().toLowerCase()
  if (skills[key]) return skills[key]
  return Object.values(skills).find((s) => s.name.toLowerCase() === key)
}
