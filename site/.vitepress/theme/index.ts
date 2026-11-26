import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import TrackPreview from './components/TrackPreview.vue'
import SkillChip from './components/SkillChip.vue'
import TermChip from './components/TermChip.vue'
import UpstreamCallout from './components/UpstreamCallout.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('TrackPreview', TrackPreview)
    app.component('SkillChip', SkillChip)
    app.component('TermChip', TermChip)
    app.component('UpstreamCallout', UpstreamCallout)
  },
} satisfies Theme
