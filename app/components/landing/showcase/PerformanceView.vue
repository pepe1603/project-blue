<template>
  <div class="space-y-6">
    <div class="flex items-center gap-3">
      <UIcon
        name="i-lucide-zap"
        class="text-amber-400 w-8 h-8"
      />
      <h3 class="text-2xl font-bold">
        Performance
      </h3>
    </div>

    <p class="text-gray-400">
      SSR, SSG y Edge rendering listos. Cada página entregada en menos de
      100ms desde el nodo más cercano al usuario.
    </p>

    <div class="grid sm:grid-cols-3 gap-4">
      <div
        v-for="metric in metrics"
        :key="metric.label"
        class="rounded-xl bg-gray-950 border border-gray-800 p-5 space-y-2"
      >
        <div
          class="text-3xl font-extrabold"
          :class="metric.color"
        >
          {{ metric.value }}
        </div>
        <div class="text-sm text-gray-400">
          {{ metric.label }}
        </div>
        <div class="h-1.5 rounded-full bg-gray-800 overflow-hidden">
          <div
            class="h-full rounded-full"
            :class="metric.barColor"
            :style="{ width: metric.pct }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const metrics = [
  { label: 'Lighthouse Score', value: '99', pct: '99%', color: 'text-emerald-400', barColor: 'bg-emerald-400' },
  { label: 'Time to First Byte', value: '38ms', pct: '96%', color: 'text-amber-400', barColor: 'bg-amber-400' },
  { label: 'Bundle Size (gzip)', value: '42kb', pct: '85%', color: 'text-sky-400', barColor: 'bg-sky-400' }
]
</script>
