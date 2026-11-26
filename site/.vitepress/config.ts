import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'UmaCafe Guide',
  description: 'Русские переводы гайдов uma.guide для сообщества',
  lang: 'ru-RU',
  base: '/umacafe-guide/',
  cleanUrls: true,
  lastUpdated: true,
  appearance: true,
  markdown: {
    math: true,
  },
  head: [
    ['meta', { name: 'theme-color', content: '#1d150f' }],
  ],
  themeConfig: {
    logo: false,
    siteTitle: 'UmaCafe Guide',
    nav: [
      { text: 'Гайды', link: '/guides/cm22-guide' },
      { text: 'Support Cards', link: '/support-cards/' },
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
        text: 'Гайды (v1)',
        items: [
          { text: 'Aquarius Cup (CM22)', link: '/guides/cm22-guide' },
          { text: 'Grand Concert', link: '/guides/grand-concert' },
          { text: 'Особенности трассы', link: '/guides/race-track-features' },
        ],
      },
      {
        text: 'Данные',
        items: [{ text: 'Support Cards', link: '/support-cards/' }],
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
        'Фанатский перевод гайдов <a href="https://uma.guide/" target="_blank" rel="noopener">uma.guide</a>. Не связан с Cygames и Upstream.',
      copyright: 'Код сайта — GPL-3.0. Текст гайдов принадлежит авторам Upstream.',
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
