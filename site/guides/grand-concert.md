---
title: Grand Concert Guide
description: Полный перевод гайда по сценарию Grand Concert (Performance Points, Lessons, Songs, Concerts)
upstream_url: https://uma.guide/guides/grand-concert
upstream_synced: 2026-11-26
---

# Grand Concert Guide

<UpstreamCallout
  url="https://uma.guide/guides/grand-concert"
  synced="2026-11-26"
  title="Grand Concert"
/>

<div class="guide-figure">
  <img src="/img/guides/article/grand_concert/gc_logo.webp" alt="Grand Concert logo" />
</div>

**Grand Concert** — это четвертый сценарий. Он фокусируется на тренировках, собирании <TermChip name="Performance Points" /> для покупки уроков и участии в промо-концертах вплоть до финального Grand Concert.

::: info
В отличие от Trackblazer, этот сценарий возвращает механику секретных эвентов. Детали на странице Персонажей!
:::

<div class="guide-figure">
  <img src="/img/guides/article/grand_concert/gc_ingame.webp" alt="Персонажи связанные со сценарием: Light Hello, Agnes Tachyon, Silence Suzuka, Mihono Bourbon, Smart Falcon" />
</div>

Персонажи, связанные со сценарием (<TermChip name="Scenario Link" />):
<CharacterChip name="Light Hello" />,
<CharacterChip name="Agnes Tachyon" />,
<CharacterChip name="Silence Suzuka" />,
<CharacterChip name="Mihono Bourbon" />,
<CharacterChip name="Smart Falcon" />.

## Статы

### Новый максимальный порог характеристик

<div class="stat-row">
  <div class="stat-box"><span class="stat-box__label"><StatIcon stat="Speed" /><b>Speed</b></span><span class="stat-box__value">1600</span></div>
  <div class="stat-box"><span class="stat-box__label"><StatIcon stat="Stamina" /><b>Stamina</b></span><span class="stat-box__value">1300</span></div>
  <div class="stat-box"><span class="stat-box__label"><StatIcon stat="Power" /><b>Power</b></span><span class="stat-box__value">1300</span></div>
  <div class="stat-box"><span class="stat-box__label"><StatIcon stat="Guts" /><b>Guts</b></span><span class="stat-box__value">1500</span></div>
  <div class="stat-box"><span class="stat-box__label"><StatIcon stat="Wit" /><b>Wit</b></span><span class="stat-box__value">1300</span></div>
</div>

::: info
Обратите внимание, что любой прирост характеристики **выше 1200** режется вдвое.

Статы выше 1200 также «половинятся» в гонках. Например, 1600 Speed считается как 1400:

<div class="math-left">

$$
1200 + \frac{1600 - 1200}{2} = 1400
$$

</div>

при расчёте целевой скорости в забеге.
:::

### Базовые приросты характеристик

Увеличили прирост характеристик от тренировок, особенно количество очков навыков (Skill Points). Как и в URA Finale, уровень тренировочной секции (Facility) растёт после четырех тренировок на этом типе секции.

| Facility | Level 1 | Level 2 | Level 3 | Level 4 | Level 5 |
| --- | --- | --- | --- | --- | --- |
| <StatIcon stat="Speed" :label="false" /><b>Speed</b> | <TypeIcon type="Speed" /> +8, <TypeIcon type="Power" /> +4, SP +4 / −19 Energy | <TypeIcon type="Speed" /> +9, <TypeIcon type="Power" /> +4, SP +4 / −20 | <TypeIcon type="Speed" /> +10, <TypeIcon type="Power" /> +4, SP +4 / −21 Energy | <TypeIcon type="Speed" /> +11, <TypeIcon type="Power" /> +5, SP +4 / −23 Energy | <TypeIcon type="Speed" /> +12, <TypeIcon type="Power" /> +6, SP +4 / −25 Energy |
| <StatIcon stat="Stamina" :label="false" /><b>Stamina</b> | <TypeIcon type="Stamina" /> +8, <TypeIcon type="Guts" /> +6, SP +4 / −20 Energy | <TypeIcon type="Stamina" /> +9, <TypeIcon type="Guts" /> +6, SP +4 / −21 | <TypeIcon type="Stamina" /> +10, <TypeIcon type="Guts" /> +6, SP +4 / −22 | <TypeIcon type="Stamina" /> +11, <TypeIcon type="Guts" /> +7, SP +4 / −24 | <TypeIcon type="Stamina" /> +12, <TypeIcon type="Guts" /> +8, SP +4 / −26 |
| <StatIcon stat="Power" :label="false" /><b>Power</b> | <TypeIcon type="Stamina" /> +4, <TypeIcon type="Power" /> +9, SP +4 / −20 Energy | <TypeIcon type="Stamina" /> +4, <TypeIcon type="Power" /> +10, SP +4 / −21 | <TypeIcon type="Stamina" /> +4, <TypeIcon type="Power" /> +11, SP +4 / −22 | <TypeIcon type="Stamina" /> +5, <TypeIcon type="Power" /> +12, SP +4 / −24 | <TypeIcon type="Stamina" /> +6, <TypeIcon type="Power" /> +13, SP +4 / −26 |
| <StatIcon stat="Guts" :label="false" /><b>Guts</b> | <TypeIcon type="Speed" /> +2, <TypeIcon type="Power" /> +2, <TypeIcon type="Guts" /> +7, SP +4 / −20 Energy | <TypeIcon type="Speed" /> +2, <TypeIcon type="Power" /> +2, <TypeIcon type="Guts" /> +8, SP +4 / −21 | <TypeIcon type="Speed" /> +2, <TypeIcon type="Power" /> +2, <TypeIcon type="Guts" /> +9, SP +4 / −22 | <TypeIcon type="Speed" /> +3, <TypeIcon type="Power" /> +2, <TypeIcon type="Guts" /> +10, SP +4 / −24 | <TypeIcon type="Speed" /> +3, <TypeIcon type="Power" /> +3, <TypeIcon type="Guts" /> +11, SP +4 / −26 |
| <StatIcon stat="Wit" :label="false" /><b>Wit</b> | <TypeIcon type="Speed" /> +2, <TypeIcon type="Wit" /> +6, SP +5 / **+5 Energy** | <TypeIcon type="Speed" /> +2, <TypeIcon type="Wit" /> +7, SP +5 / +5 | <TypeIcon type="Speed" /> +2, <TypeIcon type="Wit" /> +8, SP +5 / +5 | <TypeIcon type="Speed" /> +3, <TypeIcon type="Wit" /> +9, SP +5 / +5 | <TypeIcon type="Speed" /> +4, <TypeIcon type="Wit" /> +10, SP +5 / +5 |

### Наследование

Синие спарки поднимают предел статов в зависимости от рейтинга спарка. На старте карьеры предел поднимается следующим образом:

| Рейтинг Спарка | Изменение предела характеристики |
| :---: | :---: |
| 1★ | +4 |
| 2★ | +9 |
| 3★ | +16 |
| 6★ | +32 |
| 9★ | +48 |

На во время эвентов Вдохновения предел характеристик увеличивается случайно.

Наследование Уникального навыка родителя через зеленые спарки тоже поднимает предел характеристик (**но не дает** сами очки характеристик), в зависимости от бонусов родителя. Пример: у Oguri Cap есть бонус к Speed и Power — если при вдохновении передается **Triumphant Pulse**, то предел повысится именно по этим двум статам. Таким способом поднимаются **не больше трёх** пределов для характеристик, даже если у родителя четыре разных бонуса.

## Колоды

Из‑за высокого капа <TypeIcon type="Speed" />Speed и механики сценария рекомендуют колоду минимум с **2 <TypeIcon type="Speed" /> Speed** и **2 <TypeIcon type="Wit" /> Wit**. Оставшиеся слоты занимают <CharacterChip name="Light Hello" /> и любая другая карта.

<DeckShowcase title="Высокий бюджет" ids="30028,30101,30107,30010,30097,30052" />

<DeckShowcase title="Низкий бюджет" ids="30101,20044,30010,20002,20015,30052" />

Для более длинных дистанций может понадобиться карта типа <TypeIcon type="Stamina" /> Stamina. Если у вас проблемы с достижением минимально требуемой <TypeIcon type="Stamina" /> Стамины, очень рекомендуем использовать или позаимствовать у друзей MLB <SupportCardChip id="30016" />. 

<DeckShowcase title="Высокий бюджет на выносливость" ids="30028,30101,20033,30010,30016,30052" />

<DeckShowcase title="Низкий бюджет на выносливость" ids="30028,20044,30101,20008,20015,30052" />

### Light Hello


<CharacterChip name="Light Hello" /> это карта "приятеля" для Grand Concert. Она важна по трём причинам:

1. Будучи картой приятеля, она дает много Энергии и повышает настроение когда они вам понадобятся.
2. Даёт подсказку на <SkillChip name="See Ya Later!" id="see-ya-later" /> — золотую версию <SkillChip name="Playtime's Over!" id="playtimes-over" />; и этот навык очень сильный.
3. <SupportCardChip id="30052" /> помогает с ключевой механикой сценария: при тренировке с ней есть шанс получить **+20 Performance Points** того типа, которого у вас меньше всего. Эти очки заметно усиляют забег.

::: info
Всё это работает уже на **LB0**. На LB1 она получает +5% Training Effectiveness и ещё 5% на LB2, что делает карту ещё полезнее.
:::

## Performances

Центр сценария — серия Concerts вплоть до титульного Grand Concert. Первый Concert в конце Junior Year, далее каждые полгода. Для <TermChip name="Great Success" /> нужно заполнить <TermChip name="Hype Level" /> через Lessons.

<div class="guide-figure">
  <img src="/img/guides/article/grand_concert/gc_ui_hype_level.webp" alt="Hype Level — прогресс к следующему Concert" />
</div>

## Points

Валюта для Lessons — <TermChip name="Performance Points" />. Пять типов:

<img src="/icon/gl-tokens/utx_ico_performance_s_00.webp" class="token-icon" alt="" /> **Dance**,
<img src="/icon/gl-tokens/utx_ico_performance_s_01.webp" class="token-icon" alt="" /> **Passion**,
<img src="/icon/gl-tokens/utx_ico_performance_s_02.webp" class="token-icon" alt="" /> **Vocal**,
<img src="/icon/gl-tokens/utx_ico_performance_s_03.webp" class="token-icon" alt="" /> **Visual**,
<img src="/icon/gl-tokens/utx_ico_performance_s_05.webp" class="token-icon" alt="" /> **Composure**.

Текущие очки показаны в верхнем левом углу экрана.

<div class="guide-figure">
  <img src="/img/guides/article/grand_concert/gc_ui_point_reserved.webp" alt="Performance Points bar / reserved points UI" />
</div>

::: tip
На Upstream картинка `gc_pointbar.png` в гайде сейчас отдаёт 404; выше — соседний UI-скрин (reserved points), который показывает ту же панель очков.
:::

У каждого Training есть primary и secondary тип Points. Primary выпадает **60%** времени, secondary — **30%**, оставшиеся **10%** случайно делятся между тремя другими типами.

| Training | Primary | Secondary |
| --- | --- | --- |
| Speed | Dance | Visual |
| Stamina | Passion | Vocal |
| Power | Vocal | Composure |
| Guts | Visual | Dance |
| Wit | Composure | Passion |

<TermChip name="Friendship Training" /> даёт **два** типа Points: один от выбранного Training, второй с высокой вероятностью — тот, которого меньше всего на начало хода.

<div class="guide-figure">
  <img src="/img/guides/article/grand_concert/gc_training_rainbow.webp" alt="Rainbow Training: Dance и Passion Performance Points" />
</div>

У Light Hello событие Training Together даёт **45%** шанс на +20 Points самого дефицитного типа.

Начальный кап каждого типа Points — **200**.

### Расчёт Performance Points

Число Points зависит от уровня Facility, числа Support Cards на Facility и Scenario-linked карт:

$$
\text{PerformanceToken} = \left\lfloor (S + F) \times 1.15^{C} + 2L \right\rfloor
$$

- **S** — база от типа Training (Wit = 5, остальные = 9)
- **F** — уровень Facility (1, 2, …)
- **C** — число Support Cards на Facility
- **L** — число Scenario-link Cards на Facility

Примеры: Speed на Level 1 без Supports → **10** Points. То же с двумя Supports → **13**. Если одна из них Scenario-linked → **15**.

## Lessons

В Shop предлагают **три** Lessons. Они не сгорают. Купили одну — появляются три новые.

Если Points не хватает, Lesson можно **запланировать** (schedule): недостающее отображается на Point bar, и приходит уведомление, когда очков достаточно.

Два вида Lessons: **Techniques** и **Songs**.

::: tip
Планируете покупки? Калькулятор Upstream: [посмотреть Song Calculator на uma.guide](https://uma.guide/grand-live-calculator/).
:::

### Techniques

<div class="guide-figure">
  <img src="/img/guides/article/grand_concert/gc_ui_techniques.webp" alt="Techniques UI в Grand Concert Shop" />
</div>

Techniques дают <TermChip name="Mastery Bonus" /> — разовый эффект сразу при покупке: статы, Skill Points, Skill Hint или Energy.

| Icon | Effect | Cost | Priority |
| :---: | --- | --- | --- |
| <img src="/img/guides/article/grand_concert/technique_energy.webp" class="technique-icon" alt="Energy technique" /> | Energy +20 / +30 / +40 | 25 / 30 / 35 Random Point Type | High Priority |
| <img src="/img/guides/article/grand_concert/technique_skillpoints.webp" class="technique-icon" alt="Skill Points technique" /> | Skill Points +5 / +8 / +12 | 10 / 16 / 24 Random Point Type | Great Value |
| <img src="/img/guides/article/grand_concert/technique_skillpoints.webp" class="technique-icon" alt="Stat technique" /> | Specific Stat +5 / +8 / +12 | 10 / 16 / 24 Stat Primary Point | Great Value |
| <img src="/img/guides/article/grand_concert/technique_stat_skill.webp" class="technique-icon" alt="Stat + SP technique" /> | Stat +4 & SP +4 / Stat +6 & SP +6 | 10 Primary & 6 Secondary / 14 Primary & 10 Secondary | Great Value |
| <img src="/img/guides/article/grand_concert/technique_two_stats.webp" class="technique-icon" alt="Two stats technique" /> | 2 Stats +4 / 2 Stats +6 | 16 Primary (8 каждого) / 24 Primary (12 каждого) | Great Value |
| <img src="/img/guides/article/grand_concert/technique_skillhint.webp" class="technique-icon" alt="Skill Hint technique" /> | Skill Hint Lvl +1 / +2 / +3 | 15 / 25 / 35 Random Point Type | Low Priority |

::: info
Skill Hints зависят от Aptitude **A+** по Style и Distance вашей Uma. В Shop указано, к какому Style / Distance относится Lesson.
:::

::: tip
Energy Techniques сильно рекомендуются — меньше Rest!
:::

### Доступность Techniques

Какие Techniques доступны, зависит от числа сыгранных Concerts.

| Concerts | Techniques |
| --- | --- |
| Before First Concert | Skill Points +5, Stat +5 |
| Before Fourth Concert | Skill Points +8, Stat +8, Stat +4 & SP +4, 2 Stats +4 |
| Before Grand Concert | Skill Points +12, Stat +12, Stat +6 & SP +6, 2 Stats +6 |

Skill Hints и Energy Techniques доступны **всегда**.

### Сколько Techniques нужно для Song

После покупки определённого числа Techniques открывается выбор Songs. Число зависит от этапа карьеры и **сбрасывается после каждого Concert**.

| Concerts | Techniques required (последовательность) |
| --- | --- |
| Before 1st Concert | 1 → 2 → 3 → 4 → 4 → 2 → 3 |
| Before 2nd–4th Concert | 2 → 2 → 2 → 4 → 5 → 2 → 2 |
| Before Grand Concert | 2 → 2 → 2 → 4 → 3 → 2 → 2 |

До первого Concert: 1 Technique → первый Song; ещё 2 → второй; ещё 3 → третий; ещё 4 → четвёртый.

### Songs

<div class="guide-figure">
  <img src="/img/guides/article/grand_concert/gc_ui_songs.webp" alt="Songs UI в Grand Concert Shop" />
</div>

У Songs два бонуса:

- <TermChip name="Mastery Bonus" /> — сразу при изучении Song
- <TermChip name="Concert Bonus" /> — после следующего Concert, до конца карьеры

#### Concert Bonus

| Concert Bonus | Что делает |
| --- | --- |
| Speciality Priority Up | Поднимает <TermChip name="Speciality Priority" /> всех Support Cards |
| Friendship Bonus +X% | Плоский бонус Friendship Training |
| Support Chain Event Frequency | Чаще chained Events со Support Cards |

#### Mastery Bonus

| Mastery Bonus | Что делает |
| --- | --- |
| Stat/SP Training +X | Бонус к приросту стата / SP при Training |
| Stat + X | Плоский бонус стата |

#### Songs с начала карьеры

| Cover | Name | Mastery Bonus | Concert Bonus | Cost | Priority |
| :---: | --- | --- | --- | --- | --- |
| <img src="/img/guides/article/grand_concert/gc_001_believe.webp" class="song-cover" alt="" /> | Believe in Miracles! | Wit Training +1 | Speciality Priority Up +5 | 21 Passion + 21 Composure | High Priority |
| <img src="/img/guides/article/grand_concert/gc_002_run.webp" class="song-cover" alt="" /> | Run n' Run! | Skill Points +22 | Friendship Bonus +5% | 14 Dance + 16 Visual + 14 Composure | Great Value |
| <img src="/img/guides/article/grand_concert/gc_003_umadol.webp" class="song-cover" alt="" /> | Full Speed Ahead! Umadol Power☆ | Speed +22 | Friendship Bonus +5% | 32 Dance + 12 Visual | Great Value |
| <img src="/img/guides/article/grand_concert/gc_004_time.webp" class="song-cover" alt="" /> | Here Comes Our Time | Power +22 | Friendship Bonus +5% | 32 Vocal + 12 Composure | Great Value |
| <img src="/img/guides/article/grand_concert/gc_005_zero.webp" class="song-cover" alt="" /> | Zero Is Where the Center Stands! | Speed Training +1 | Support Chain Event Frequency +1 | 21 Dance + 21 Visual | Good Value |
| <img src="/img/guides/article/grand_concert/gc_006_way.webp" class="song-cover" alt="" /> | Go This Way | Power Training +1 | Support Chain Event Frequency +1 | 21 Vocal + 21 Composure | Good Value |
| <img src="/img/guides/article/grand_concert/gc_007_ring.webp" class="song-cover" alt="" /> | Ring Ring Diary | Stamina Training +1 | Support Chain Event Frequency +1 | 21 Passion + 21 Visual | Low Priority |
| <img src="/img/guides/article/grand_concert/gc_008_fallin.webp" class="song-cover" alt="" /> | Getaway! Fallin' Love | Guts Training +1 | Support Chain Event Frequency +1 | 21 Dance + 21 Visual | Low Priority |

#### После первого Concert

| Cover | Name | Mastery Bonus | Concert Bonus | Cost | Priority |
| :---: | --- | --- | --- | --- | --- |
| <img src="/img/guides/article/grand_concert/gc_009_dream.webp" class="song-cover" alt="" /> | Run for Our Dream! | Skill Point Bonus +2 | Speciality Priority Up +5 | 21 Passion + 21 Visual | High Priority |
| <img src="/img/guides/article/grand_concert/gc_010_bluebird.webp" class="song-cover" alt="" /> | Our Blue Bird Days | Speed Training +2 | Speciality Priority Up +5 | 21 Dance + 42 Visual | High Priority |
| <img src="/img/guides/article/grand_concert/gc_011_anone.webp" class="song-cover" alt="" /> | Hey, Guess What! | Guts Training +2 | Speciality Priority Up +5 | 42 Dance + 21 Visual | Low Priority |

#### После второго Concert

| Cover | Name | Mastery Bonus | Concert Bonus | Cost | Priority |
| :---: | --- | --- | --- | --- | --- |
| <img src="/img/guides/article/grand_concert/gc_012_shine.webp" class="song-cover" alt="" /> | Grow Up and Shine! | Skill Point Bonus +3 | Support Chain Event Frequency +1 | 21 Dance + 21 Vocal + 21 Composure | High Priority |
| <img src="/img/guides/article/grand_concert/gc_013_seven.webp" class="song-cover" alt="" /> | Seven Colors Scenery | Power Training +2 | Speciality Priority Up +5 | 21 Vocal + 42 Composure | Great Value |
| <img src="/img/guides/article/grand_concert/gc_014_sunbeam.webp" class="song-cover" alt="" /> | Sunbeam Cheer | Wit Training +2 | Support Chain Event Frequency +1 | 42 Passion + 21 Composure | Great Value |
| <img src="/img/guides/article/grand_concert/gc_015_sunny.webp" class="song-cover" alt="" /> | Hoppity Sunny Days♪ | Stamina Training +2 | Speciality Priority Up +5 | 42 Passion + 21 Vocal | Low Priority |

#### После третьего Concert

| Cover | Name | Mastery Bonus | Concert Bonus | Cost | Priority |
| :---: | --- | --- | --- | --- | --- |
| <img src="/img/guides/article/grand_concert/gc_016_treasure.webp" class="song-cover" alt="" /> | Precious Treasure Box | Speed +26 | Friendship Bonus +10% | 42 Dance + 26 Visual | High Priority |
| <img src="/img/guides/article/grand_concert/gc_017_fanfare.webp" class="song-cover" alt="" /> | Fanfare for the Future! | Guts +26 | Friendship Bonus +10% | 26 Dance + 42 Visual | High Priority |
| <img src="/img/guides/article/grand_concert/gc_018_present.webp" class="song-cover" alt="" /> | Present March♪ | Power +22 | Friendship Bonus +5% | 22 Vocal + 22 Composure | Great Value |
| <img src="/img/guides/article/grand_concert/gc_019_dreamsky.webp" class="song-cover" alt="" /> | Dream Sky | Wit +22 | Friendship Bonus +5% | 22 Passion + 22 Composure | Great Value |
| <img src="/img/guides/article/grand_concert/gc_020_world.webp" class="song-cover" alt="" /> | The World's at Our Whim | Stamina +22 | Friendship Bonus +5% | 32 Passion + 12 Vocal | Great Value |
| <img src="/img/guides/article/grand_concert/gc_021_spring.webp" class="song-cover" alt="" /> | Sky-Blue Spring | Guts +22 | Friendship Bonus +5% | 12 Dance + 32 Visual | Great Value |

#### Специальные Songs (по таймингу карьеры)

| Cover | Name | Mastery Bonus | Concert Bonus | Когда |
| :---: | --- | --- | --- | --- |
| <img src="/img/guides/article/grand_concert/gc_022_debut.webp" class="song-cover" alt="" /> | Make Debut! | All Points +10 | Speciality Priority Up +5 | 4 хода после старта карьеры |
| <img src="/img/guides/article/grand_concert/gc_023_girlslegend.webp" class="song-cover" alt="" /> | Girls' Legend U | All Stats +10 | Friendship Bonus +10% | After Senior Year Early December |

::: info
Для **GIRLS' LEGEND U** целитесь в **≥18 Songs** до неё: откроется особая версия песни и золотой Scenario Skill <SkillChip name="I Wanna Win with You" id="i-wanna-win-with-you" />.
:::

### Song Saving

<TermChip name="Song Saving" /> — когда выбор Songs уже открыт, но вы **не** покупаете Song до следующего Concert. Shop не меняется: Song можно взять после Concert. Это засчитывается в прогрессию к следующему Song (см. Gameplay). Минус: <TermChip name="Concert Bonus" /> сдвигается ещё на один Concert. Обычно так делают, если текущий выбор Songs слабый — быстрее добраться до следующего пула.

#### Пример Song Saving

<video class="guide-video" src="/img/guides/article/grand_concert/gc_song_saving.webm" controls loop muted playsinline></video>

### Concerts

Songs поднимают Hype Level. Нужно **три Songs** перед каждым Concert для Great Success: **+10** ко всем статам (меньше Songs → только **+3**).

Дополнительно за Lessons между Concerts дают Skill Points: Song = **+25 SP**, Technique = **+5 SP**.

Всего пять Concerts:

| Concert | Turn |
| --- | --- |
| 1st Concert | Junior Year Late December |
| 2nd Concert | Classic Year Late June |
| 3rd Concert | Classic Year Late December |
| 4th Concert | Senior Year Late June |
| Grand Concert (5th) | Senior Year Late December |

::: info
Каждый Concert также поднимает кап **каждого** типа Performance Points на **+50**.
:::

## Gameplay

Цикл Grand Concert: набирать Points через Training → тратить на Techniques и Songs.

Главное — понимать, сколько Techniques нужно до следующего Song, и что счётчик **сбрасывается после Concert**.

Поскольку Light Hello может дать +20 Points, тренируйтесь с ней в приоритете.

::: warning
Races **не** дают Points. Лишние заезды не делайте, кроме случаев, когда нужен Secret Event вашей Uma.
:::

### Junior Year

- **Максимизируйте Friendship Bonds.** Friendship Training даёт больше Points — раскачивайте bonds как можно быстрее.
- **Цельтесь в Mastery Stat Bonus Songs.** Concert Bonus включается только после Concert, а Mastery Training Bonus работает сразу. Friendship Bonus Songs берите ближе к Concert, если можно. Friendship Bonus отлично стакается по карьере. На первый Concert — минимум **три Songs** для Great Success.

### Classic Year

- **Skill Point Bonus.** Songs «Run for Our Dream!» и «Grow Up and Shine!» поднимают прирост SP на всю оставшуюся карьеру — берите сразу, как появятся.
- **Покупки Songs.** На пятый Song нужно пять Techniques. Обычно останавливаются на **четырёх Songs** за цикл и копят Points на следующий.

### Senior Year

- **≥18 Songs** до GIRLS' LEGEND U → особая версия песни и <SkillChip name="I Wanna Win with You" id="i-wanna-win-with-you" />. Иначе получите белый <SkillChip name="Halfway to a Dream" id="halfway-to-a-dream" /> (speed + accel в случайной точке второй половины при ≤6-м месте).
- **Умные покупки перед Grand Concert.** Между Song с Mastery Stat Bonus и Song с Concert Friendship Bonus берите **Stat Bonus** первым: Concert Bonus после Grand Concert работает только на последние три тренировочных хода.
- **Pivot на 21 Song.** При 21 Song до Grand Concert открывается Technique Lesson поверх оставшихся Song Lessons. Если Songs слабые — иногда выгоднее спамить Techniques ради SP после Grand Concert.

## Scenario Rewards

При **≥16 Songs** к Early November Senior Year можно выбрать Skill Hint. С Scenario-linked персонажами / их Support Cards (Smart Falcon, Mihono Bourbon, Agnes Tachyon, Silence Suzuka) — **золотой** Skill; без них — белая версия (где она есть).

| Character | Skill Hint (gold) | Skill Hint (white) |
| --- | --- | --- |
| Smart Falcon | <SkillChip name="Full Speed!" id="full-speed" /> | <SkillChip name="Full Tilt" id="full-tilt" /> |
| Mihono Bourbon | <SkillChip name="Concentration" id="concentration" /> | <SkillChip name="Focus" id="focus" /> |
| Agnes Tachyon | <SkillChip name="Come What May" id="come-what-may" /> | <SkillChip name="All I've Got" id="all-ive-got" /> |
| Silence Suzuka | <SkillChip name="Trackblazer" id="trackblazer" /> | <SkillChip name="Rosy Outlook" id="rosy-outlook" /> |
| None | <SkillChip name="Lane Legerdemain" id="lane-legerdemain" /> | N/A |

::: tip
Для CM / Dirt часто важен Shop hint вроде <SkillChip name="Forward, March!" id="forward-march" /> — см. [Aquarius Cup (CM22)](/guides/cm22-guide).
:::

## Дополнительно

### Scenario Spark

Scenario Spark называется **Grand Concert Scenario** и повышает **Speed** и **Guts**.

### Unique Skill level

Прокачка Unique Skill в Grand Concert как в URA Finale:

| Turn | Requirement |
| --- | --- |
| Senior year, Early February | Turf: 60 000 Fans · Dirt: 40 000 Fans |
| Senior year, Early April | Turf: 70 000 Fans · Dirt: 60 000 Fans · и 60 (green) bond с Akikawa |
| Senior year, Early December | Turf: 120 000 Fans · Dirt: 80 000 Fans |

## Что смотреть на uma.guide

- [Grand Concert на uma.guide](https://uma.guide/guides/grand-concert) (полный EN-оригинал)
- [Song Calculator](https://uma.guide/grand-live-calculator/)
- Character pages / Secret Events Trainee
- Deck-builder / compare и прочие Tools
