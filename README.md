# UmaCafe Guide

Русскоязычный [GitHub Pages](https://blushymostly.github.io/umacafe-guide/) сайт с фанатскими переводами гайдов [uma.guide](https://uma.guide/).

Сайт — VitePress-приложение в каталоге `site/` (base `/umacafe-guide/`).

## Локальный запуск

Требуется [Bun](https://bun.sh/).

```bash
bun install --cwd site
bun run dev
```

Сборка и превью:

```bash
bun run build
bun run preview
```

Команды `dev` / `build` / `preview` из корня репозитория проксируют в `site/`.

## Контент v1

- [Aquarius Cup (CM22)](site/guides/cm22-guide.md)
- [Grand Concert](site/guides/grand-concert.md)
- [Особенности трассы](site/guides/race-track-features.md)

Переводы — черновики; качество проверяют люди через PR.

## Деплой

GitHub Actions (`.github/workflows/deploy-pages.yml`) собирает `site/` и публикует в GitHub Pages при пуше в `main`. В настройках репозитория нужно включить Pages → Source: **GitHub Actions**.

## Лицензия

Код сайта — GPL-3.0. Текст гайдов Upstream принадлежит их авторам; мы даём атрибуцию и ссылки на оригиналы.
