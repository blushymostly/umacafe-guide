<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps<{
  /** Speed | Stamina | Power | Guts | Wit */
  stat: string
  /** Show English label after icon */
  label?: boolean
}>()

const STAT_FILE: Record<string, string> = {
  speed: 'status_00.png',
  stamina: 'status_01.png',
  power: 'status_02.png',
  guts: 'status_03.png',
  wit: 'status_04.png',
  wisdom: 'status_04.png',
  intelligence: 'status_04.png',
}

const key = computed(() => props.stat.trim().toLowerCase())
const src = computed(() => {
  const file = STAT_FILE[key.value]
  return file ? withBase(`/icon/stat/${file}`) : null
})
const display = computed(() => {
  const map: Record<string, string> = {
    speed: 'Speed',
    stamina: 'Stamina',
    power: 'Power',
    guts: 'Guts',
    wit: 'Wit',
    wisdom: 'Wit',
    intelligence: 'Wit',
  }
  return map[key.value] ?? props.stat
})
</script>

<template>
  <span class="stat-icon" :title="display">
    <img v-if="src" :src="src" class="stat-icon__img" :alt="display" />
    <span v-if="label !== false" class="stat-icon__label">{{ display }}</span>
  </span>
</template>
