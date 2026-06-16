<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon?: string
}>()

const emit = defineEmits<{
  click: []
}>()
</script>

<template>
  <UCard
    class="cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg"
    @click="emit('click')"
  >
    <div class="flex items-start gap-3">
      <div
        v-if="icon"
        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-primary-500"
      >
        <UIcon
          :name="icon"
          class="w-5 h-5"
        />
      </div>

      <div class="min-w-0 flex-1">
        <h4 class="font-semibold text-(--ui-text)">
          {{ title }}
        </h4>
        <p class="mt-1 text-sm text-(--ui-text-muted)">
          {{ description }}
        </p>
      </div>
    </div>

    <slot />
  </UCard>
</template>
