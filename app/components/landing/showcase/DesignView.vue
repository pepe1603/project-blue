<template>
  <div class="space-y-6">
    <div class="flex items-center gap-3">
      <UIcon
        name="i-lucide-palette"
        class="text-primary-400 w-8 h-8"
      />
      <h3 class="text-2xl font-bold">
        Sistema de Diseño
      </h3>
    </div>

    <p class="text-gray-400">
      Construido sobre Tailwind CSS y Reka UI. Tokens de color, tipografía
      y espaciado consistentes en toda la app.
    </p>

    <div class="grid grid-cols-5 gap-3">
      <div
        v-for="shade in colorShades"
        :key="shade.label"
        class="rounded-xl h-16 flex items-end p-2"
        :class="shade.bg"
      >
        <span class="text-xs font-mono text-white/70">{{ shade.label }}</span>
      </div>
    </div>

    <div class="flex gap-3 flex-wrap pt-2">
      <UButton
        label="Primary"
        color="primary"
      />
      <UButton
        label="Neutral"
        color="neutral"
        variant="soft"
      />
      <UButton
        label="Success"
        color="success"
        variant="outline"
      />
      <UButton
        label="Warning"
        color="warning"
        variant="ghost"
      />
      <UButton
        label="Error"
        color="error"
        variant="subtle"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const colorShades = [
  { label: '900', bg: 'bg-primary-900' },
  { label: '700', bg: 'bg-primary-700' },
  { label: '500', bg: 'bg-primary-500' },
  { label: '300', bg: 'bg-primary-300' },
  { label: '100', bg: 'bg-primary-100' }
]
</script>
