<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps<{ open: boolean }>()
const tip = ref<HTMLElement | null>(null)
const style = ref<Record<string, string>>({
  position: 'fixed',
  top: '0px',
  left: '0px',
  opacity: '0',
  visibility: 'hidden',
  zIndex: '1000',
  pointerEvents: 'none',
})

function place(anchor: HTMLElement) {
  const r = tip.value?.getBoundingClientRect()
  const a = anchor.getBoundingClientRect()
  const tw = r?.width ?? 280
  const th = r?.height ?? 80
  let left = a.left
  let top = a.top - th - 8
  if (top < 8) top = a.bottom + 8
  if (left + tw > window.innerWidth - 8) left = Math.max(8, window.innerWidth - tw - 8)
  if (left < 8) left = 8
  style.value = {
    ...style.value,
    top: `${top}px`,
    left: `${left}px`,
    opacity: '1',
    visibility: 'visible',
  }
}

const anchorEl = ref<HTMLElement | null>(null)

function onScroll() {
  if (props.open && anchorEl.value) place(anchorEl.value)
}

watch(
  () => props.open,
  (open) => {
    if (!open) {
      style.value = { ...style.value, opacity: '0', visibility: 'hidden' }
      return
    }
    requestAnimationFrame(() => {
      if (anchorEl.value) place(anchorEl.value)
    })
  },
)

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll, true)
  window.removeEventListener('resize', onScroll)
})

function setAnchor(el: HTMLElement | null) {
  anchorEl.value = el
  if (el) {
    window.addEventListener('scroll', onScroll, true)
    window.addEventListener('resize', onScroll)
  }
}

defineExpose({ setAnchor })
</script>

<template>
  <Teleport to="body">
    <div ref="tip" class="chip-tooltip" role="tooltip" :style="style">
      <slot />
    </div>
  </Teleport>
</template>
