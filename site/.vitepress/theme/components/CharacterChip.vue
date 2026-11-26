<script setup lang="ts">
import { computed, ref } from 'vue'
import { findCharacter } from '../../../data/characters'
import { findSupportCard } from '../../../data/supportCards'
import ChipTooltip from './ChipTooltip.vue'

const props = defineProps<{ name: string; id?: string }>()
const found = computed(() => findCharacter(props.id ?? props.name))
const support = computed(() =>
  found.value?.supportCardId != null ? findSupportCard(found.value.supportCardId) : undefined,
)
const open = ref(false)
const root = ref<HTMLElement | null>(null)
const tip = ref<{ setAnchor: (el: HTMLElement | null) => void } | null>(null)

function show() {
  tip.value?.setAnchor(root.value)
  open.value = true
}
function hide() {
  open.value = false
}
</script>

<template>
  <span
    ref="root"
    class="character-chip"
    tabindex="0"
    @mouseenter="show"
    @mouseleave="hide"
    @focus="show"
    @blur="hide"
  >
    <slot>{{ found?.enName ?? name }}</slot>
    <ChipTooltip ref="tip" :open="open">
      <template v-if="found">
        <strong>{{ found.enName }}</strong>
        <div v-if="found.entry" class="chip-meta">
          {{ found.entry.charaName }}
          <span v-if="found.entry.cardTitle"> · {{ found.entry.cardTitle }}</span>
        </div>
        <div v-if="found.entry" class="chip-apt">
          Turf {{ found.entry.aptitudes.turf }} · Dirt {{ found.entry.aptitudes.dirt }} · Mile
          {{ found.entry.aptitudes.mile }} · Front {{ found.entry.aptitudes.front }} · Pace
          {{ found.entry.aptitudes.pace }}
        </div>
        <div v-else-if="support" class="chip-meta">
          Support: {{ support.typeName }} {{ support.rarityDisplay }} {{ support.title }}
        </div>
        <div v-if="support?.art" class="chip-art-wrap">
          <img :src="support.art" :alt="found.enName" class="chip-art" />
        </div>
      </template>
    </ChipTooltip>
  </span>
</template>
