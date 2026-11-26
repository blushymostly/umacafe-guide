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

Главная цель сценария это серия концертов вплоть до Grand Concert. Первый концерт проходит в конце Junior Year, далее каждые полгода. Для <TermChip name="Great Success" /> нужно заполнить <TermChip name="Hype Level" /> покупая уроки.

<div class="guide-figure">
  <img src="/img/guides/article/grand_concert/gc_ui_hype_level.webp" alt="Hype Level — прогресс к следующему Concert" />
</div>

## Points

Для покупки Уроков используется валюта <TermChip name="Performance Points" />. У неё пять типов:

<img src="/icon/gl-tokens/utx_ico_performance_s_00.webp" class="token-icon" alt="" /> **Dance**,
<img src="/icon/gl-tokens/utx_ico_performance_s_01.webp" class="token-icon" alt="" /> **Passion**,
<img src="/icon/gl-tokens/utx_ico_performance_s_02.webp" class="token-icon" alt="" /> **Vocal**,
<img src="/icon/gl-tokens/utx_ico_performance_s_03.webp" class="token-icon" alt="" /> **Visual**,
<img src="/icon/gl-tokens/utx_ico_performance_s_05.webp" class="token-icon" alt="" /> **Composure**.

Текущие очки показаны в верхнем левом углу экрана.

<div class="guide-figure">
  <img src="/img/guides/article/grand_concert/gc_ui_point_reserved.webp" alt="Performance Points bar / reserved points UI" />
</div>

Каждая тренировка имеет основной и дополнительный тип очков, которые она дает. Основной тип находится на ней с **60%** шансом, дополнительный с **30%**-тью, оставшиеся **10%** случайно делятся между тремя другими типами.

| Тип тренировки | Основной тип | Дополнительный тип |
| --- | --- | --- |
| Speed | Dance | Visual |
| Stamina | Passion | Vocal |
| Power | Vocal | Composure |
| Guts | Visual | Dance |
| Wit | Composure | Passion |

<TermChip name="Friendship Training" /> даёт **два** типа очков: один от выбранного типа тренировки, второй с высоким шансом будет тот тип, который имеет меньше всего очков в настоящий момент.

<div class="guide-figure">
  <img src="/img/guides/article/grand_concert/gc_training_rainbow.webp" alt="Rainbow Training: Dance и Passion Performance Points" />
</div>

У <CharacterChip name="Light Hello" /> есть событие Training Together, которое даёт **45%** шанс на получения +20 очков того типа, которых у вас сейчас меньше всего.

Начальное максимальное количество каждого типа очков — **200**.

### Расчёт Performance Points

Число очков зависит от уровня секции (Facility), числа карт поддержки на Facility и Scenario-linked карт:

$$
\text{PerformanceToken} = \left\lfloor (S + F) \times 1.15^{C} + 2L \right\rfloor
$$

- **S** — база от типа Training (Wit = 5, остальные = 9)
- **F** — уровень Facility (1, 2, …)
- **C** — число карт поддержки на Facility
- **L** — число Scenario-link Cards на Facility

Примеры: Speed на Level 1 без карт поддержки → **10** очков. То же с двумя картами поддержки → **13**. Если одна из них Scenario-linked → **15**.

## Lessons

Магазин сценария предлагает **три** урока. Они не сгорают. Когда вы покупаете один урок сразу появится три новых.

Если очков на покупку не хватает, урок можно **запланировать** (schedule): недостающее количество отображается слева, когда очков достаточно появится уведомление об этом.

Существует два типа уроков: **Техники (Techniques)** и **Песни (Songs)**.

::: tip
Планируете покупки? Есть калькулятор песен на uma.guide: [посмотреть Song Calculator на uma.guide](https://uma.guide/grand-live-calculator/).
:::

### Techniques

<div class="guide-figure">
  <img src="/img/guides/article/grand_concert/gc_ui_techniques.webp" alt="Techniques UI в Grand Concert Shop" />
</div>

Techniques дают <TermChip name="Mastery Bonus" /> — этот эффект применяется сразу при покупке. Эффект может давать повышение характеристик, Skill Points, подсказки для навыков или энергия.

| Иконка | Эффект | Стоимость | Приоритет |
| :---: | --- | --- | --- |
| <img src="/img/guides/article/grand_concert/technique_energy.webp" class="technique-icon" alt="Техника Energy" /> | Energy +20 / +30 / +40 | 25 / 30 / 35 Случайный тип очков | Высокий приоритет |
| <img src="/img/guides/article/grand_concert/technique_skillpoints.webp" class="technique-icon" alt="Техника Skill Points" /> | Skill Points +5 / +8 / +12 | 10 / 16 / 24 Случайный тип очков | Отличная покупка |
| <img src="/img/guides/article/grand_concert/technique_skillpoints.webp" class="technique-icon" alt="Техника характеристики" /> | Конкретная характеристика +5 / +8 / +12 | 10 / 16 / 24 Основной тип характеристики | Отличная покупка |
| <img src="/img/guides/article/grand_concert/technique_stat_skill.webp" class="technique-icon" alt="Техника характеристика + SP" /> | Характеристика +4 и SP +4 / Характеристика +6 и SP +6 | 10 основной и 6 вторичный / 14 основной и 10 вторичный | Отличная покупка |
| <img src="/img/guides/article/grand_concert/technique_two_stats.webp" class="technique-icon" alt="Техника двух характеристик" /> | 2 характеристики +4 / 2 характеристики +6 | 16 основной (по 8 каждого) / 24 основной (по 12 каждого) | Отличная покупка |
| <img src="/img/guides/article/grand_concert/technique_skillhint.webp" class="technique-icon" alt="Техника Skill Hint" /> | Skill Hint ур. +1 / +2 / +3 | 15 / 25 / 35 Случайный тип очков | Низкий приоритет |

::: info
Skill Hints зависят от Aptitude **A+** по Style и Distance вашей Умы. В магазине всегда подписано к какому стилю или дистанции относится урок.
:::

::: tip
Всегда обращайте внимание на техники, повышающие энергию. Они позволяют меньше отдыхать!
:::

### Доступность Techniques

Наличие техник напрямую зависит от количества концертов, в которых вы поучаствовали.

| Концерты | Техники |
| --- | --- |
| Перед Первым Концертом | Skill Points +5, Stat +5 |
| Перед Четвертым Концертом | Skill Points +8, Stat +8, Stat +4 & SP +4, 2 Stats +4 |
| Перед Grand Concert | Skill Points +12, Stat +12, Stat +6 & SP +6, 2 Stats +6 |

Skill Hints и Energy Techniques доступны **всегда**.

### Сколько Techniques нужно для Song

После покупки определённого числа техник открывается выбор Песни. Число зависит от этапа карьеры и **сбрасывается после каждого концерта**.

| Концерт | Количество техник, необходимых для появления песни |
| --- | --- |
| Перед 1-ым Концертом | 1 → 2 → 3 → 4 → 4 → 2 → 3 |
| Перед 2-ым до 4-ого Концерта  | 2 → 2 → 2 → 4 → 5 → 2 → 2 |
| Перед Grand Concert | 2 → 2 → 2 → 4 → 3 → 2 → 2 |

Перед вашим первым концертом вам нужно купить одну технику, чтобы открыть первую песню. Ещё две техники откроют вторую песню; ещё 3 → третью; ещё 4 → четвёртую.

### Songs

<div class="guide-figure">
  <img src="/img/guides/article/grand_concert/gc_ui_songs.webp" alt="Songs UI в Grand Concert Shop" />
</div>

В отличии от техник, Песни имеют два типа бонусов: <TermChip name="Mastery Bonus" />, который вы получаете сразу при изучении песни и <TermChip name="Concert Bonus" />, который применяется после вашего следующего концерта и остается до конца карьеры.

#### <TermChip name="Concert Bonus" />

| Concert Bonus | Что делает |
| --- | --- |
| Speciality Priority Up | Поднимает <TermChip name="Speciality Priority" /> всех Support Cards |
| Friendship Bonus +X% | Плоский бонус Friendship Training |
| Support Chain Event Frequency | Чаще chained Events со Support Cards |

#### <TermChip name="Mastery Bonus" />

| Mastery Bonus | Что делает |
| --- | --- |
| Stat/SP Training +X | Бонус к приросту стата / SP при Training |
| Stat + X | Плоский бонус стата |

#### Songs с начала карьеры

| Обложка | Название | Mastery Bonus | Concert Bonus | Стоимость | Приоритет |
| :---: | --- | --- | --- | --- | --- |
| <img src="/img/guides/article/grand_concert/gc_001_believe.webp" class="song-cover" alt="" /> | Believe in Miracles! | Wit Training +1 | Speciality Priority Up +5 | 21 Passion + 21 Composure | Высокий приоритет |
| <img src="/img/guides/article/grand_concert/gc_002_run.webp" class="song-cover" alt="" /> | Run n' Run! | Skill Points +22 | Friendship Bonus +5% | 14 Dance + 16 Visual + 14 Composure | Отличная покупка |
| <img src="/img/guides/article/grand_concert/gc_003_umadol.webp" class="song-cover" alt="" /> | Full Speed Ahead! Umadol Power☆ | Speed +22 | Friendship Bonus +5% | 32 Dance + 12 Visual | Отличная покупка |
| <img src="/img/guides/article/grand_concert/gc_004_time.webp" class="song-cover" alt="" /> | Here Comes Our Time | Power +22 | Friendship Bonus +5% | 32 Vocal + 12 Composure | Отличная покупка |
| <img src="/img/guides/article/grand_concert/gc_005_zero.webp" class="song-cover" alt="" /> | Zero Is Where the Center Stands! | Speed Training +1 | Support Chain Event Frequency +1 | 21 Dance + 21 Visual | Хорошая покупка |
| <img src="/img/guides/article/grand_concert/gc_006_way.webp" class="song-cover" alt="" /> | Go This Way | Power Training +1 | Support Chain Event Frequency +1 | 21 Vocal + 21 Composure | Хорошая покупка |
| <img src="/img/guides/article/grand_concert/gc_007_ring.webp" class="song-cover" alt="" /> | Ring Ring Diary | Stamina Training +1 | Support Chain Event Frequency +1 | 21 Passion + 21 Visual | Низкий приоритет |
| <img src="/img/guides/article/grand_concert/gc_008_fallin.webp" class="song-cover" alt="" /> | Getaway! Fallin' Love | Guts Training +1 | Support Chain Event Frequency +1 | 21 Dance + 21 Visual | Низкий приоритет |

#### После первого Concert

| Cover | Name | Mastery Bonus | Concert Bonus | Cost | Приоритет |
| :---: | --- | --- | --- | --- | --- |
| <img src="/img/guides/article/grand_concert/gc_009_dream.webp" class="song-cover" alt="" /> | Run for Our Dream! | Skill Point Bonus +2 | Speciality Priority Up +5 | 21 Passion + 21 Visual | Высокий приоритет |
| <img src="/img/guides/article/grand_concert/gc_010_bluebird.webp" class="song-cover" alt="" /> | Our Blue Bird Days | Speed Training +2 | Speciality Priority Up +5 | 21 Dance + 42 Visual | Высокий приоритет |
| <img src="/img/guides/article/grand_concert/gc_011_anone.webp" class="song-cover" alt="" /> | Hey, Guess What! | Guts Training +2 | Speciality Priority Up +5 | 42 Dance + 21 Visual | Низкий приоритет |

#### После второго Concert

| Cover | Name | Mastery Bonus | Concert Bonus | Cost | Приоритет |
| :---: | --- | --- | --- | --- | --- |
| <img src="/img/guides/article/grand_concert/gc_012_shine.webp" class="song-cover" alt="" /> | Grow Up and Shine! | Skill Point Bonus +3 | Support Chain Event Frequency +1 | 21 Dance + 21 Vocal + 21 Composure | Высокий приоритет |
| <img src="/img/guides/article/grand_concert/gc_013_seven.webp" class="song-cover" alt="" /> | Seven Colors Scenery | Power Training +2 | Speciality Priority Up +5 | 21 Vocal + 42 Composure | Отличная покупка |
| <img src="/img/guides/article/grand_concert/gc_014_sunbeam.webp" class="song-cover" alt="" /> | Sunbeam Cheer | Wit Training +2 | Support Chain Event Frequency +1 | 42 Passion + 21 Composure | Отличная покупка |
| <img src="/img/guides/article/grand_concert/gc_015_sunny.webp" class="song-cover" alt="" /> | Hoppity Sunny Days♪ | Stamina Training +2 | Speciality Priority Up +5 | 42 Passion + 21 Vocal | Низкий приоритет |

#### После третьего Concert

| Cover | Name | Mastery Bonus | Concert Bonus | Cost | Приоритет |
| :---: | --- | --- | --- | --- | --- |
| <img src="/img/guides/article/grand_concert/gc_016_treasure.webp" class="song-cover" alt="" /> | Precious Treasure Box | Speed +26 | Friendship Bonus +10% | 42 Dance + 26 Visual | Высокий приоритет |
| <img src="/img/guides/article/grand_concert/gc_017_fanfare.webp" class="song-cover" alt="" /> | Fanfare for the Future! | Guts +26 | Friendship Bonus +10% | 26 Dance + 42 Visual | Высокий приоритет |
| <img src="/img/guides/article/grand_concert/gc_018_present.webp" class="song-cover" alt="" /> | Present March♪ | Power +22 | Friendship Bonus +5% | 22 Vocal + 22 Composure | Отличная покупка |
| <img src="/img/guides/article/grand_concert/gc_019_dreamsky.webp" class="song-cover" alt="" /> | Dream Sky | Wit +22 | Friendship Bonus +5% | 22 Passion + 22 Composure | Отличная покупка |
| <img src="/img/guides/article/grand_concert/gc_020_world.webp" class="song-cover" alt="" /> | The World's at Our Whim | Stamina +22 | Friendship Bonus +5% | 32 Passion + 12 Vocal | Отличная покупка |
| <img src="/img/guides/article/grand_concert/gc_021_spring.webp" class="song-cover" alt="" /> | Sky-Blue Spring | Guts +22 | Friendship Bonus +5% | 12 Dance + 32 Visual | Отличная покупка |

#### Специальные Songs (по таймингу карьеры)

| Cover | Name | Mastery Bonus | Concert Bonus | Когда |
| :---: | --- | --- | --- | --- |
| <img src="/img/guides/article/grand_concert/gc_022_debut.webp" class="song-cover" alt="" /> | Make Debut! | All Points +10 | Speciality Priority Up +5 | 4 хода после старта карьеры |
| <img src="/img/guides/article/grand_concert/gc_023_girlslegend.webp" class="song-cover" alt="" /> | Girls' Legend U | All Stats +10 | Friendship Bonus +10% | After Senior Year Early December |

::: info
Для **GIRLS' LEGEND U** целитесь в **≥18 Songs** до неё: откроется особая версия песни и золотой навык сценария <SkillChip name="I Wanna Win with You" id="i-wanna-win-with-you" />.
:::

### Song Saving

<TermChip name="Song Saving" /> можно сделать, когда вы добрались до возможности купить песню, но не покупаете её до следующего концерта. Она засчитается в качестве урока для прогрессии к следующей песни, но есть минусЮ который состоит в том, что <TermChip name="Concert Bonus" /> сдвигается ещё на один концерт. Обычно так делают, если текущий выбор песен слабый, чтобы быстрее добраться до следующего пула.

#### Пример Song Saving

<video class="guide-video" src="/img/guides/article/grand_concert/gc_song_saving.webm" controls loop muted playsinline></video>

### Concerts

Песни поднимают уровень хайпа. Нужно выучить **три песни** перед каждым концертом для получения Great Success: **+10** ко всем статам (если песен было меньше, то получаем только **+3**).

К тому же каждый урок, который вы изучили между концертами дает Skill Point'ы: Песня = **+25 SP**, техника = **+5 SP**.

Всего пять Concerts:

| Концерт | Ход |
| --- | --- |
| 1st Concert | Junior Year Late December |
| 2nd Concert | Classic Year Late June |
| 3rd Concert | Classic Year Late December |
| 4th Concert | Senior Year Late June |
| Grand Concert (5th) | Senior Year Late December |

::: info
Каждый Concert также поднимает максимальное количество очков **каждого** типа Performance Points на **+50**.
:::

## Gameplay

Цикл Grand Concert состоит в набирании очков Performance через тренировки и их трата на техники и песни.

Самый важный аспект заключается в понимании сколько техник вам нужно для следующей песни и то, что это количество сбрасывается после каждого концерта.

Поскольку <CharacterChip name="Light Hello" /> может дать +20 очков её тренировки всегда в приоритете.

::: warning
Поскольку гонки **не** дают очки рекомендуется не делать дополнительные гонки, если они не нужны для открытия секретного эвента вашей умы!
:::

### Junior Year

- **Максимизируйте Friendship Bonds.** Friendship Training даёт больше Points — раскачивайте дружбу как можно быстрее.
- **Цельтесь в Mastery Stat Bonus Songs.** Concert Bonus включается только после концерта, а Mastery Training Bonus работает сразу. Friendship Bonus Songs берите ближе к концерту, если можно. Friendship Bonus отлично стакается по карьере. На первый Concert — минимум **три Songs** для Great Success.

### Classic Year

- **Обязательно покупайте Skill Point Bonus.** Песни «Run for Our Dream!» и «Grow Up and Shine!» поднимают прирост SP на всю оставшуюся карьеру — берите сразу, как появятся.
- **Покупки песен.** На пятую песню нужно пять техник. Обычно останавливаются на **четырёх песнях** за цикл и копят очки на следующий.

### Senior Year

- **Цельтесть к получению как минимум 18 песен** перед получением GIRLS' LEGEND U, чтобы получить особую версию песни и <SkillChip name="I Wanna Win with You" id="i-wanna-win-with-you" />. Иначе получите белый <SkillChip name="Halfway to a Dream" id="halfway-to-a-dream" /> (speed + accel в случайной точке второй половины при ≤6-м месте).
- **Умные покупки перед Grand Concert.** Если у вас выбор между песнями с Mastery Stat Bonus и Friendship Bonus после концерта берите **бонус к характеристикам в первую очередь** первым: Concert Bonus после Grand Concert работает только на последние три тренировочных хода.
- **Цельтесь на 21 песню.** При 21 Song до Grand Concert открывается Technique Lesson поверх оставшихся уроков песен. Если песни слабые — иногда выгоднее спамить техники ради максимизирования SP после Grand Concert.

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

