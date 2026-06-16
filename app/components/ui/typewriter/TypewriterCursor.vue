<script setup lang="ts">
interface Props {
  size?: number
}

withDefaults(
  defineProps<Props>(),
  {
    size: 18
  }
)
</script>

<template>
  <LucideTextCursor
    :size="size"
    class="
      typewriter-cursor
      inline-block
      align-middle
      ml-0.5
    "
  />
</template>

<style scoped>
.typewriter-cursor {
  animation:
    cursorBlink
    1s
    ease-in-out
    infinite;
}

@keyframes cursorBlink {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.15;
  }
}
</style>
