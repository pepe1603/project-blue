<template>
  <div class="space-y-6">
    <div class="flex items-center gap-3">
      <UIcon
        name="i-lucide-users"
        class="text-emerald-400 w-8 h-8"
      />
      <h3 class="text-2xl font-bold">
        Comunidad
      </h3>
    </div>

    <p class="text-gray-400">
      Más de 50,000 developers ya construyen con nosotros.
      Únete al Discord, GitHub y foros oficiales.
    </p>

    <div class="grid sm:grid-cols-3 gap-4">
      <UCard
        v-for="member in team"
        :key="member.name"
        class="bg-gray-950 border border-gray-800 text-center"
      >
        <div class="w-14 h-14 rounded-full bg-primary-500/20 border border-primary-500/40 flex items-center justify-center mx-auto mb-3 text-primary-400 font-bold text-lg">
          {{ member.name.charAt(0) }}
        </div>
        <p class="font-semibold">
          {{ member.name }}
        </p>
        <p class="text-xs text-gray-400 mt-1">
          {{ member.role }}
        </p>
        <div class="flex justify-center gap-2 mt-3">
          <UBadge
            :label="member.badge"
            color="primary"
            variant="subtle"
            size="xs"
          />
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
const team = [
  { name: 'Ana Torres', role: 'Core Maintainer', badge: 'Vue Expert' },
  { name: 'Carlos Ruiz', role: 'Module Author', badge: 'Nuxt Alumni' },
  { name: 'Sofia Mendez', role: 'DevRel', badge: 'Community Lead' }
]
</script>
