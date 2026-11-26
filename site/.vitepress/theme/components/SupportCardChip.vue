<script setup lang="ts">
import { computed, ref } from 'vue'
import { displayCardName, findSupportCard, typeIconPath } from '../../../data/supportCards'
import ChipTooltip from './ChipTooltip.vue'

const props = defineProps<{ id: number | string; label?: string }>()
const card = computed(() => findSupportCard(props.id))
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
    class="support-card-chip"
    tabindex="0"
    @mouseenter="show"
    @mouseleave="hide"
    @focus="show"
    @blur="hide"
  >
    <img v-if="card" :src="typeIconPath(card.typeName)" class="chip-inline-icon" alt="" />
    <slot>{{ label ?? (card ? displayCardName(card) : id) }}</slot>
    <ChipTooltip ref="tip" :open="open">
      <template v-if="card">
        <strong>{{ label ?? displayCardName(card) }}</strong>
        <div class="chip-meta">
          {{ card.rarityDisplay }} {{ card.typeName }} · {{ card.enTitle || card.title }}
        </div>
        <ul v-if="card.effects?.length" class="chip-effects">
          <li v-for="(e, i) in card.effects.slice(0, 6)" :key="i">{{ e.name }}</li>
        </ul>
        <div v-if="card.art" class="chip-art-wrap">
          <img :src="card.art" class="chip-art" :alt="displayCardName(card)" />
        </div>
      </template>
    </ChipTooltip>
  </span>
</template>
