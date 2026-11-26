<script setup lang="ts">
import { computed, ref } from 'vue'
import { findSkill } from '../../../data/skills'
import ChipTooltip from './ChipTooltip.vue'

const props = defineProps<{ name: string; id?: string; icon?: string }>()
const skill = computed(() => findSkill(props.id ?? props.name))
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

const iconSrc = computed(() => {
  if (props.icon) return props.icon
  const iconId = skill.value && 'iconId' in skill.value ? (skill.value as { iconId?: number }).iconId : undefined
  if (iconId) return `/icon/skill/utx_ico_skill_${iconId}.webp`
  return null
})
</script>

<template>
  <span
    ref="root"
    class="skill-chip"
    tabindex="0"
    @mouseenter="show"
    @mouseleave="hide"
    @focus="show"
    @blur="hide"
  >
    <img v-if="iconSrc" :src="iconSrc" class="chip-inline-icon" alt="" />
    <slot>{{ skill?.name ?? name }}</slot>
    <ChipTooltip ref="tip" :open="open">
      <template v-if="skill">
        <strong>{{ skill.name }}</strong>
        <div>{{ skill.description }}</div>
      </template>
    </ChipTooltip>
  </span>
</template>
