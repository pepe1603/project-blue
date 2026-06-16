<script setup lang="ts">
defineProps<{
  heading: string
  description: string
}>()
</script>

<template>
  <section class="py-16 sm:py-24">
    <UCard class="text-center bg-gradient-to-br from-primary-500/5 to-primary-500/10 ring-0">
      <div class="py-8 px-4">
        <LucideSparkles class="w-10 h-10 text-primary-500 mx-auto mb-6" />
        <h2 class="text-3xl sm:text-4xl font-bold text-(--ui-text) mb-4">
          {{ heading }}
        </h2>
        <p class="text-(--ui-text-muted) mb-8 max-w-xl mx-auto">
          {{ description }}
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <UButton
            label="Crear cuenta gratis"
            icon="i-lucide-user-plus"
            size="xl"
          />
          <UButton
            label="Contactar ventas"
            icon="i-lucide-mail"
            variant="ghost"
            size="xl"
          />
        </div>
      </div>
    </UCard>
  </section>
</template>
