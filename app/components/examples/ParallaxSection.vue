<script setup lang="ts">
defineProps<{
  image: string
  title: string
  subtitle?: string
  height?: string
}>()
</script>

<template>
  <div
    class="relative overflow-hidden rounded-2xl"
    :style="{ height: height || '400px' }"
  >
    <div
      class="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-300"
      :style="{ backgroundImage: `url(${image})` }"
    />

    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

    <div class="relative flex h-full flex-col items-center justify-end p-6 sm:p-8 text-center">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
        {{ title }}
      </h2>
      <p
        v-if="subtitle"
        class="text-sm sm:text-base text-white/80 max-w-xl"
      >
        {{ subtitle }}
      </p>

      <slot />
    </div>
  </div>
</template>
