<script setup lang="ts">
import { computed } from 'vue'
import { findTerm } from '../../../data/terms'

const props = defineProps<{ name: string; id?: string }>()

const term = computed(() => findTerm(props.id ?? props.name))
</script>

<template>
  <span class="term-chip" tabindex="0">
    <slot>{{ term?.name ?? name }}</slot>
    <span v-if="term" class="term-pop" role="tooltip">
      <strong>{{ term.name }}</strong>
      <div>{{ term.description }}</div>
    </span>
  </span>
</template>
