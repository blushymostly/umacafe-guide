<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { supportCardIndex, findSupportCard, typeIconPath } from '../../../data/supportCards'
import type { SupportCardDetail } from '../../../data/supportCards'

const filter = ref('')
const typeFilter = ref('all')
const selectedId = ref<string | null>(null)

const types = computed(() => {
  const set = new Set(supportCardIndex.map((c) => c.typeName).filter(Boolean))
  return ['all', ...[...set].sort()]
})

const filtered = computed(() => {
  const q = filter.value.trim().toLowerCase()
  return supportCardIndex.filter((c) => {
    if (typeFilter.value !== 'all' && c.typeName !== typeFilter.value) return false
    if (!q) return true
    return (
      c.charaName.toLowerCase().includes(q) ||
      c.title.toLowerCase().includes(q) ||
      String(c.id).includes(q) ||
      c.typeName.toLowerCase().includes(q)
    )
  })
})

const selected = computed<SupportCardDetail | undefined>(() =>
  selectedId.value ? findSupportCard(selectedId.value) : undefined,
)

function select(id: number) {
  selectedId.value = String(id)
  const url = new URL(window.location.href)
  url.searchParams.set('id', String(id))
  history.replaceState(null, '', url.toString())
}

function uniqueLines(card: SupportCardDetail): string[] {
  const ue = card.uniqueEffect
  if (!ue || typeof ue !== 'object') return []
  const lines: string[] = []
  for (let i = 0; i < 5; i++) {
    const name = ue[`type${i}Name`]
    const val = ue[`value${i}`]
    if (typeof name === 'string' && name) lines.push(`${name}: ${val ?? ''}`)
  }
  return lines
}

onMounted(() => {
  const id = new URL(window.location.href).searchParams.get('id')
  if (id) selectedId.value = id
})

watch(selectedId, () => {
  /* keep URL in sync when clearing */
})
</script>

<template>
  <div class="sc-browser">
    <div class="sc-browser__controls">
      <input v-model="filter" class="sc-browser__search" type="search" placeholder="Поиск (имя, title, id)" />
      <select v-model="typeFilter" class="sc-browser__type">
        <option v-for="t in types" :key="t" :value="t">{{ t === 'all' ? 'Все типы' : t }}</option>
      </select>
    </div>
    <p class="sc-browser__count">{{ filtered.length }} карт</p>

    <div class="sc-browser__layout">
      <div class="sc-browser__grid">
        <button
          v-for="c in filtered"
          :key="c.id"
          type="button"
          class="sc-browser__item"
          :class="{ 'is-active': selectedId === String(c.id) }"
          @click="select(c.id)"
        >
          <img
            :src="`https://uma.guide/img/card/composite/tex_support_card_${c.id}.webp`"
            :alt="c.charaName"
            class="sc-browser__thumb"
            loading="lazy"
          />
          <span class="sc-browser__item-meta">
            <img :src="typeIconPath(c.typeName)" class="chip-inline-icon" alt="" />
            {{ c.charaName }}
          </span>
        </button>
      </div>

      <aside v-if="selected" class="sc-browser__detail">
        <img :src="selected.art" :alt="selected.charaName" class="sc-browser__hero" />
        <h2>{{ selected.charaName }}</h2>
        <p class="sc-browser__sub">
          {{ selected.rarityDisplay }} · {{ selected.typeName }} · {{ selected.title }} · id
          {{ selected.id }}
        </p>
        <h3>Effects (EN)</h3>
        <ul>
          <li v-for="(e, i) in selected.effects" :key="i">
            {{ e.name }}
            <span class="muted">(init {{ e.init }})</span>
          </li>
        </ul>
        <template v-if="uniqueLines(selected).length">
          <h3>Unique Effect (EN)</h3>
          <ul>
            <li v-for="(line, i) in uniqueLines(selected)" :key="i">{{ line }}</li>
          </ul>
        </template>
        <template v-if="selected.skillHints?.length">
          <h3>Skill Hints</h3>
          <ul>
            <li v-for="h in selected.skillHints" :key="h.skillId">{{ h.skillName }} ({{ h.skillId }})</li>
          </ul>
        </template>
        <p class="sc-browser__out">
          <a
            :href="`https://uma.guide/support-cards/detail?id=${selected.id}`"
            target="_blank"
            rel="noopener"
            >Посмотреть на uma.guide</a
          >
        </p>
      </aside>
    </div>
  </div>
</template>
