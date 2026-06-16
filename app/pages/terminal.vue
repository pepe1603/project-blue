<script setup lang="ts">
definePageMeta({
  layout: 'terminal'
})

useSeoMeta({
  title: 'Terminal - Only Truths',
  description: 'Demo del componente Terminal Window'
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
    <TerminalWindow title="Only Truths Terminal">
      <div class="space-y-6">
        <div class="flex items-center gap-3">
          <LucideTerminal class="w-6 h-6 text-primary-500" />
          <h1 class="text-2xl font-bold text-(--ui-text)">
            Terminal Window Component
          </h1>
        </div>

        <p class="text-(--ui-text-muted)">
          Este es un componente reutilizable con estilo de terminal. El contenido se renderiza dentro del slot.
        </p>

        <div class="bg-(--ui-bg-muted) rounded-lg p-4 font-mono text-sm">
          <div class="text-green-500">
            $ nuxt dev
          </div>
          <div class="text-(--ui-text-muted) mt-2">
            Nuxt 4.4.8 ready in 1.2s
          </div>
          <div class="text-(--ui-text-muted)">
            ➜ Local: http://localhost:3000/
          </div>
        </div>

        <div class="flex gap-3">
          <UButton
            label="Ejemplo 1"
            icon="i-lucide-play"
            variant="subtle"
          />
          <UButton
            label="Ejemplo 2"
            icon="i-lucide-code"
            variant="outline"
          />
        </div>
      </div>
    </TerminalWindow>
  </div>
</template>
