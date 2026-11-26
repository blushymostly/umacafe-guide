<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps<{
  /** Speed | Stamina | Power | Guts | Wit | Friend | Group | … */
  type: string
}>()

const TYPE_FILE: Record<string, string> = {
  speed: 'speed.svg',
  stamina: 'stamina.svg',
  power: 'power.svg',
  guts: 'guts.svg',
  wit: 'wit.svg',
  wisdom: 'wit.svg',
  intelligence: 'wit.svg',
  friend: 'pal.svg',
  pal: 'pal.svg',
  group: 'group.svg',
}

const key = computed(() => props.type.trim().toLowerCase())
const src = computed(() => {
  const file = TYPE_FILE[key.value]
  return file ? withBase(`/icon/type/${file}`) : null
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
    friend: 'Friend',
    pal: 'Friend',
    group: 'Group',
  }
  return map[key.value] ?? props.type
})
</script>

<template>
  <img v-if="src" :src="src" class="type-icon" :alt="display" :title="display" />
</template>
