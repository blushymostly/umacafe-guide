---
title: Grand Concert
description: Перевод гайда по сценарию Grand Concert (опора для колод CM)
upstream_url: https://uma.guide/guides/grand-concert
upstream_synced: 2026-11-26
---

# Grand Concert Guide

<UpstreamCallout
  url="https://uma.guide/guides/grand-concert"
  synced="2026-11-26"
  title="Grand Concert Guide"
/>

::: info Черновик
Полный Upstream-гайд очень длинный. Ниже — сжатый русский черновик ключевых блоков, нужных как Dependency Guide для CM22. Дополнения через PR приветствуются. Полная версия: [uma.guide/guides/grand-concert](https://uma.guide/guides/grand-concert).
:::

**Grand Concert** — четвёртый Scenario: упор на Training, набор Performance Points → Lessons и концерты вплоть до финального Grand Concert.

::: info
В отличие от Trackblazer, возвращаются Character Secret Events — смотрите страницу персонажа Trainee на Upstream.
:::

Сценарно связанные персонажи: **Light Hello**, **Agnes Tachyon**, **Silence Suzuka**, **Mihono Bourbon**, **Smart Falcon**.

## Статы

### Новые капы

| Speed | Stamina | Power | Guts | Wit |
| ---: | ---: | ---: | ---: | ---: |
| 1600 | 1300 | 1300 | 1500 | 1300 |

::: info
Прирост **выше 1200** режется вдвое. Для race mechanics статы выше 1200 тоже «половинятся»: например 1600 Speed считается как 1400 при расчёте Target Speed — \(1200 + (1600-1200)/2 = 1400\).
:::

### Базовые приросты Training

Приросты (особенно Skill Points) выше; уровень Facility растёт как в URA — после четырёх тренировок на объекте. Точные таблицы Level 1–5 — в [оригинале](https://uma.guide/guides/grand-concert#basic-stat-gains).

Кратко: Speed/Stamina/Power/Guts тратят энергию; **Wit** даёт SP и **+энергию**.

### Inheritance и капы

Синие Sparks поднимают капы по рейтингу (примерно: 1★ +4 … 9★ +48 на старте). На Inheritance Events uncар’ы случайны. Unique Skill родителя через green Sparks тоже поднимает капы (без прямых статов) в зависимости от бонусов родителя.

## Performance Points, Lessons, Shop

Сценарий крутится вокруг **Performance Points** → покупка **Lessons** и подготовка концертов.

Для CM-игроков критичен **Grand Concert Shop**: оттуда берутся универсальные Skills вроде <SkillChip name="Forward, March!" id="forward-march" /> (см. CM22), если хватает токенов в Senior Year.

Детальный приоритет Lessons / Concert routing / hint pools — Outbound на Upstream (раздел обновляется авторами часто).

## Колоды (связь с CM)

Общий принцип, на который ссылается CM22:

- стабильный каркас **3 Speed / 2 Wit + Light Hello** при хороших Stamina sparks;
- карты с нужными Hints / Event chains (например Taiki Shuttle → <SkillChip name="Mile Maven" id="mile-maven" />);
- skill-карты поднимают потолок, но усложняют тренировку.

Интерактивные витрины колод на UmaCafe Guide не копируем — смотрите [раздел колод на Upstream CM22](https://uma.guide/guides/cm22-guide#recommended-decks-and-support-cards) и полный Grand Concert guide.

## Что дописать в следующих PR

- Полные таблицы Facility gains  
- Приоритеты Lessons / Concert  
- Scenario-linked event chains  
- Рекомендованные support-lineups вне CM22  

Пока используйте эту страницу как русскоязычный мост + Outbound на полный английский текст.
