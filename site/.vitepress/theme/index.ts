import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import '@fontsource-variable/onest'
import './custom.css'
import TrackPreview from './components/TrackPreview.vue'
import SkillChip from './components/SkillChip.vue'
import TermChip from './components/TermChip.vue'
import CharacterChip from './components/CharacterChip.vue'
import SupportCardChip from './components/SupportCardChip.vue'
import DeckShowcase from './components/DeckShowcase.vue'
import SupportCardBrowser from './components/SupportCardBrowser.vue'
import StatIcon from './components/StatIcon.vue'
import UpstreamCallout from './components/UpstreamCallout.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('TrackPreview', TrackPreview)
    app.component('SkillChip', SkillChip)
    app.component('TermChip', TermChip)
    app.component('CharacterChip', CharacterChip)
    app.component('SupportCardChip', SupportCardChip)
    app.component('DeckShowcase', DeckShowcase)
    app.component('SupportCardBrowser', SupportCardBrowser)
    app.component('StatIcon', StatIcon)
    app.component('UpstreamCallout', UpstreamCallout)
  },
} satisfies Theme
