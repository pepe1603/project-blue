<script setup lang="ts">
interface Feature {
  icon: string
  title: string
  description: string
}

defineProps<{
  heading: string
  features: Feature[]
}>()
</script>

<template>
  <section class="py-16 sm:py-24">
    <div class="text-center mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold text-(--ui-text) mb-4">
        {{ heading }}
      </h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <UCard
        v-for="(feature, index) in features"
        :key="index"
        class="group hover:ring-primary-500/50 transition-all duration-300"
      >
        <div class="flex flex-col items-start gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/10">
            <component
              :is="feature.icon"
              class="w-6 h-6 text-primary-500"
            />
          </div>
          <h3 class="text-lg font-semibold text-(--ui-text)">
            {{ feature.title }}
          </h3>
          <p class="text-(--ui-text-muted) text-sm leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </UCard>
    </div>
  </section>
</template>
