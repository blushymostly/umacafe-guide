<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { findSupportCard, typeIconPath } from '../../../data/supportCards'

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
        <img :src="card!.art" :alt="card!.charaName" class="deck-showcase__art" loading="lazy" />
        <div class="deck-showcase__caption">
          <img :src="typeIconPath(card!.typeName)" class="chip-inline-icon" alt="" />
          <span>{{ card!.charaName }}</span>
        </div>
      </a>
    </div>
    <p class="deck-showcase__note">
      Карточки: metadata на UmaCafe Guide; арт с
      <a href="https://uma.guide/support-cards/" target="_blank" rel="noopener">uma.guide</a>
      (посмотреть на uma.guide).
    </p>
  </div>
</template>
