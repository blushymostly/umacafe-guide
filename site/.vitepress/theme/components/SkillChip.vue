<script setup lang="ts">
import { computed, ref } from 'vue'
import { findSkill, skillIconSrc } from '../../../data/skills'
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

const iconSrc = computed(() => props.icon || skillIconSrc(skill.value))
/** Keep Guide-facing EN label; DB may use a different Upstream EN name. */
const label = computed(() => props.name)
const tipName = computed(() => skill.value?.name ?? props.name)
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
    <slot>{{ label }}</slot>
    <ChipTooltip ref="tip" :open="open">
      <template v-if="skill">
        <div class="skill-tip-head">
          <img v-if="iconSrc" :src="iconSrc" class="skill-tip-icon" alt="" />
          <strong>{{ tipName }}</strong>
        </div>
        <div class="skill-tip-desc" v-html="skill.description"></div>
        <div v-if="skill.effectSummary" class="chip-meta">{{ skill.effectSummary }}</div>
        <div
          v-if="skill.name && skill.name.toLowerCase() !== name.toLowerCase()"
          class="chip-meta"
        >
          Upstream: {{ skill.name }}
        </div>
      </template>
      <template v-else>
        <strong>{{ name }}</strong>
        <div class="chip-meta">Skill not found in DB</div>
      </template>
    </ChipTooltip>
  </span>
</template>
