<script setup lang="ts">
import {
  ref,
  onMounted,
  watch
} from 'vue'

interface Props {
  value: number
  label: string
  suffix?: string
  duration?: number
}

const props = withDefaults(
  defineProps<Props>(),
  {
    suffix: '',
    duration: 1500
  }
)

const displayed = ref(0)

function animate() {
  const start = performance.now()
  const from = 0
  const to = props.value

  function step(now: number) {
    const elapsed = now - start
    const progress = Math.min(
      elapsed / props.duration,
      1
    )
    const eased
      = 1 - Math.pow(1 - progress, 3)

    displayed.value = Math.round(
      from + (to - from) * eased
    )

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  animate()
})

watch(
  () => props.value,
  () => animate()
)
</script>

<template>
  <div class="text-center">
    <div class="text-3xl sm:text-4xl font-extrabold text-primary-500 tabular-nums">
      {{ displayed }}{{ suffix }}
    </div>
    <div class="text-sm text-(--ui-text-muted) mt-1">
      {{ label }}
    </div>
  </div>
</template>
