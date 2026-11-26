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
      Фанатский перевод Upstream-гайда
      <template v-if="title"> «{{ title }}»</template>.
    </div>
    <div>
      Оригинал:
      <a :href="url" target="_blank" rel="noopener">{{ url }}</a>
    </div>
    <div>Синхронизация с Upstream: <code>{{ synced }}</code></div>
  </aside>
</template>
