<script setup lang="ts">
defineProps<{
  url: string
  synced: string
  title?: string
}>()
</script>

<template>
  <aside class="upstream-callout">
    <div>
      Перевод гайда с uma.guide
      <template v-if="title"> «{{ title }}»</template>.
    </div>
    <div>
      Оригинал:
      <a :href="url" target="_blank" rel="noopener">{{ url }}</a>
    </div>
  </aside>
</template>
