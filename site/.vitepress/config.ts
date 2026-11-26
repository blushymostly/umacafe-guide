import { defineConfig } from 'vitepress'

const base = '/umacafe-guide/'

/** Raw HTML `<img src="/icon/...">` / `<video src="/img/...">` in markdown is not
 *  rewritten by VitePress (only `![](/x)` is). Prefix public asset URLs with base. */
function rewritePublicAssetUrls(html: string): string {
  const baseNoSlash = base.endsWith('/') ? base.slice(0, -1) : base
  return html.replace(
    /\b(src|poster|href)="(\/(?:icon|img)\/[^"]+)"/g,
    (match, attr: string, path: string) => {
      if (path.startsWith(base) || path.startsWith(`${baseNoSlash}/`)) return match
      return `${attr}="${baseNoSlash}${path}"`
    },
  )
}

export default defineConfig({
  title: 'Гайды',
  description: 'Гайды для Umamusume Pretty Derby на русском',
  lang: 'ru-RU',
  base,
  cleanUrls: true,
  lastUpdated: true,
  appearance: true,
  markdown: {
    math: true,
  },
  transformHtml(code) {
    return rewritePublicAssetUrls(code)
  },
  head: [
    ['meta', { name: 'theme-color', content: '#1d150f' }],
  ],
  themeConfig: {
    logo: false,
    siteTitle: 'UMA.CAFE',
    nav: [
      { text: 'Гайды', link: '/guides/cm22-guide' },
      { text: 'Карты поддержки', link: '/support-cards/' },
      { text: 'О сайте', link: '/about' },
      {
        text: 'uma.guide',
        link: 'https://uma.guide/',
        target: '_blank',
        rel: 'noopener',
      },
    ],
    sidebar: [
      {
        text: 'Гайды',
        items: [
          { text: 'Aquarius Cup (CM22)', link: '/guides/cm22-guide' },
          { text: 'Grand Concert', link: '/guides/grand-concert' },
          { text: 'Особенности трасс', link: '/guides/race-track-features' },
        ],
      },
      {
        text: 'Данные',
        items: [{ text: 'Карты поддержки', link: '/support-cards/' }],
      },
    ],
    socialLinks: [],
    outline: { label: 'На этой странице' },
    docFooter: { prev: 'Назад', next: 'Далее' },
    darkModeSwitchLabel: 'Тема',
    lightModeSwitchTitle: 'Светлая тема',
    darkModeSwitchTitle: 'Тёмная тема',
    returnToTopLabel: 'Наверх',
    sidebarMenuLabel: 'Меню',
    footer: {
      message:
        'Переведенные гайды с сайта <a href="https://uma.guide/" target="_blank" rel="noopener">uma.guide</a>. Сайт не связан с Cygames и uma.guide.',
      copyright: 'Код сайта — GPL-3.0. Текст гайдов принадлежит авторам с uma.guide.',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск' },
          modal: {
            noResultsText: 'Ничего не найдено',
            resetButtonTitle: 'Сбросить',
            footer: { selectText: 'выбрать', navigateText: 'навигация', closeText: 'закрыть' },
          },
        },
      },
    },
  },
})
