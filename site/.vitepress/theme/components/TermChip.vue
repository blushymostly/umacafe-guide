<script setup lang="ts">
import { computed, ref } from 'vue'
import { findTerm } from '../../../data/terms'
import ChipTooltip from './ChipTooltip.vue'

const props = defineProps<{ name: string; id?: string }>()
const term = computed(() => findTerm(props.id ?? props.name))
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
    class="term-chip"
    tabindex="0"
    @mouseenter="show"
    @mouseleave="hide"
    @focus="show"
    @blur="hide"
  >
    <slot>{{ term?.name ?? name }}</slot>
    <ChipTooltip ref="tip" :open="open">
      <template v-if="term">
        <strong>{{ term.name }}</strong>
        <div>{{ term.description }}</div>
      </template>
    </ChipTooltip>
  </span>
</template>
