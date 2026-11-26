---
title: Особенности трассы
description: Склоны и Surface Types — механики трассы (перевод uma.guide)
upstream_url: https://uma.guide/guides/race-track-features
upstream_synced: 2026-11-26
---

# Особенности трассы — Race Mechanics

<UpstreamCallout
  url="https://uma.guide/guides/race-track-features"
  synced="2026-11-26"
  title="Track Features"
/>

::: warning Архив Upstream
На Upstream статья помечена как archived и может устареть. Ниже — перевод для контекста CM22 (в т.ч. якорь Surface Types / power penalty).
:::

Подраздел [Race Mechanics](https://uma.guide/guides/race-mechanics) (Outbound Link).

На трассе есть несколько особенностей, которые влияют на Uma во время заезда.

## Склоны

### Uphill

Базовое Acceleration снижается с `0.0006` до `0.0004` на подъёме. Target Speed дополнительно уменьшается:

\[
\text{UphillDecrease} = \text{SlopePer} \cdot \frac{200}{\text{PowerStat}}
\]

### Downhill

На спуске Uma каждую секунду имеет шанс войти в <TermChip name="Downhill Mode" />:

\[
\text{EnterDownhill} = \text{FinalWit} \cdot 0.04
\]

В режиме:

- Target Speed растёт на \(\text{DownhillSpeed} = 0.3 + \frac{\text{SlopePer}}{10}\)
- расход HP дополнительно режется на **60%**
- 20% шанс выйти из режима каждую секунду; можно войти снова

## Surface Types {#surface-types}

К **Power** применяется модификатор по типу покрытия и состоянию грунта (<TermChip name="Power penalty" />):

| | Firm | Good | Soft | Heavy |
| --- | ---: | ---: | ---: | ---: |
| **Turf** | 0 | −50 | −50 | −50 |
| **Dirt** | −100 | −50 | −100 | −100 |

На **Heavy** дополнительно **Speed −50**. Требование к Stamina (расход HP) растёт на **Soft** и **Heavy**.

Для CM22 (Tokyo Dirt, Soft) это означает сильный Power penalty — отсюда упор на secondary accel в гайде CM22.
