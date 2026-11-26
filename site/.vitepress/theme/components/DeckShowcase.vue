<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { displayCardName, findSupportCard, typeIconPath } from '../../../data/supportCards'

const props = defineProps<{
  title?: string
  /** Comma-separated supportCardIds */
  ids: string
}>()

const cards = computed(() =>
  props.ids
    .split(/[\s,]+/)
    .filter(Boolean)
    .map((id) => findSupportCard(id))
    .filter(Boolean),
)

function cardHref(id: number) {
  return withBase(`/support-cards/?id=${id}`)
}
</script>

<template>
  <div class="deck-showcase">
    <div v-if="title" class="deck-showcase__title">{{ title }}</div>
    <div class="deck-showcase__grid">
      <a
        v-for="card in cards"
        :key="card!.id"
        class="deck-showcase__card"
        :href="cardHref(card!.id)"
      >
        <img :src="card!.art" :alt="displayCardName(card!)" class="deck-showcase__art" loading="lazy" />
      </a>
    </div>
  </div>
</template>
