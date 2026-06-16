<script setup lang="ts">
defineProps<{
  title?: string
  showButtons?: boolean
}>()
</script>

<template>
  <div class="w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-(--ui-border) shadow-2xl">
    <div class="bg-(--ui-bg-muted) px-3 sm:px-4 py-3 flex items-center justify-between">
      <div
        v-if="showButtons !== false"
        class="flex items-center gap-1.5 sm:gap-2"
      >
        <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
        <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
        <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
      </div>

      <div
        v-else
        class="w-[40px] sm:w-[52px]"
      />

      <div class="flex-1 text-center">
        <span
          v-if="title"
          class="text-xs sm:text-sm font-medium text-(--ui-text-muted)"
        >
          {{ title }}
        </span>
      </div>

      <div class="w-[40px] sm:w-[52px]" />
    </div>

    <div class="bg-(--ui-bg-elevated) px-4 sm:px-6 md:px-8 py-4 sm:py-6 min-h-[300px]">
      <slot />
    </div>
  </div>
</template>
