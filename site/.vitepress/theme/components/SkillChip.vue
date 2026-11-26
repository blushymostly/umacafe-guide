<script setup lang="ts">
import { computed } from 'vue'
import { findSkill } from '../../../data/skills'

const props = defineProps<{ name: string; id?: string }>()

const skill = computed(() => findSkill(props.id ?? props.name))
</script>

<template>
  <span class="skill-chip" tabindex="0">
    <slot>{{ skill?.name ?? name }}</slot>
    <span v-if="skill" class="skill-pop" role="tooltip">
      <strong>{{ skill.name }}</strong>
      <div>{{ skill.description }}</div>
    </span>
  </span>
</template>
