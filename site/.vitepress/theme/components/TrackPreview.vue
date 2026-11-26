<script setup lang="ts">
/**
 * Track Preview — visualization language adapted from uma-tools (GPL-3.0).
 * https://github.com/alpha123/uma-tools
 *
 * Self-contained Vue port for Guide embeds (not a full Tools UI).
 */
withDefaults(
  defineProps<{
    name?: string
    surface?: 'Dirt' | 'Turf'
    distance?: number
    orientation?: 'left' | 'right' | 'straight'
    thresholds?: string
  }>(),
  {
    name: 'Tokyo Dirt 1600m',
    surface: 'Dirt',
    distance: 1600,
    orientation: 'left',
    thresholds: 'Speed, Stamina',
  },
)

const orientationLabel: Record<string, string> = {
  left: 'против часовой (left)',
  right: 'по часовой (right)',
  straight: 'прямая',
}
</script>

<template>
  <section class="track-preview" aria-label="Track Preview">
    <div class="track-preview__title">{{ name }}</div>
    <div class="track-preview__meta">
      <span>{{ surface }} · {{ distance }}m</span>
      <span>{{ orientationLabel[orientation] }}</span>
      <span v-if="thresholds">Stat thresholds: {{ thresholds }}</span>
    </div>

    <svg
      class="track-preview__svg"
      viewBox="0 0 600 180"
      role="img"
      :aria-label="`${name} track diagram`"
    >
      <!-- Elevation / slope band -->
      <rect x="0" y="18" width="216" height="36" fill="#d3f344" opacity="0.85" />
      <polygon points="216,36 216,54 291,54 291,38" fill="#d3f344" opacity="0.85" />
      <rect x="291" y="38" width="122" height="36" fill="#d3f344" opacity="0.85" />
      <polygon points="413,54 413,38 507,18 507,54" fill="#d3f344" opacity="0.85" />
      <rect x="507" y="18" width="93" height="36" fill="#d3f344" opacity="0.85" />
      <rect x="0" y="54" width="600" height="4" fill="#8caa0a" />

      <!-- Slope labels -->
      <rect x="216" y="58" width="75" height="28" fill="#52c3b8" />
      <text x="253" y="76" text-anchor="middle" fill="#793f16" font-size="11" font-weight="600">↘</text>
      <rect x="413" y="58" width="94" height="28" fill="#eacf93" />
      <text x="460" y="76" text-anchor="middle" fill="#793f16" font-size="11" font-weight="600">↗</text>

      <!-- Straights / corners -->
      <rect x="0" y="92" width="244" height="28" fill="#d1ebff" />
      <text x="122" y="110" text-anchor="middle" fill="#793f16" font-size="10" font-weight="600">→</text>
      <rect x="244" y="92" width="84" height="28" fill="#ffd8b9" />
      <text x="286" y="110" text-anchor="middle" fill="#793f16" font-size="10" font-weight="600">⮌3</text>
      <rect x="328" y="92" width="84" height="28" fill="#fee4d1" />
      <text x="370" y="110" text-anchor="middle" fill="#793f16" font-size="10" font-weight="600">⮌4</text>
      <rect x="412" y="92" width="188" height="28" fill="#b9e0ff" />
      <text x="506" y="110" text-anchor="middle" fill="#793f16" font-size="10" font-weight="600">→</text>

      <!-- Phases -->
      <rect x="0" y="128" width="100" height="28" fill="#009a6f" />
      <text x="50" y="146" text-anchor="middle" fill="#fff" font-size="9" font-weight="600">Opening</text>
      <rect x="100" y="128" width="300" height="28" fill="#f2e967" />
      <text x="250" y="146" text-anchor="middle" fill="#793f16" font-size="9" font-weight="600">Middle</text>
      <rect x="400" y="128" width="100" height="28" fill="#d186af" />
      <text x="450" y="146" text-anchor="middle" fill="#fff" font-size="9" font-weight="600">Final</text>
      <rect x="500" y="128" width="100" height="28" fill="#c76d9f" />
      <text x="550" y="146" text-anchor="middle" fill="#fff" font-size="9" font-weight="600">Last Spurt</text>

      <rect x="0" y="164" width="600" height="10" fill="#e4ebf0" />
      <text x="8" y="172" fill="#6b91ad" font-size="8">0m</text>
      <text x="560" y="172" fill="#6b91ad" font-size="8">{{ distance }}m</text>
    </svg>

    <div class="track-preview__credit">
      Track visualization based on
      <a href="https://github.com/alpha123/uma-tools" target="_blank" rel="noopener">uma-tools</a>
      (GPL-3.0).
    </div>
  </section>
</template>
