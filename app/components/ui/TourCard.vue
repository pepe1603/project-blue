<script setup lang="ts">
interface Props {
  title: string
  description: string
  icon: string
  to: string
  features?: string[]
  badge?: string
}

defineProps<Props>()
</script>

<template>
  <UCard
    class="group relative overflow-hidden transition-all duration-300 hover:ring-primary-500/50 hover:shadow-lg hover:shadow-primary-500/5"
  >
    <div class="flex flex-col gap-5">
      <div class="flex items-start justify-between">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-500 transition-colors group-hover:bg-primary-500/20">
          <component
            :is="icon"
            class="w-6 h-6"
          />
        </div>

        <UBadge
          v-if="badge"
          :label="badge"
          variant="subtle"
          size="sm"
        />
      </div>

      <div>
        <h3 class="text-lg font-semibold text-(--ui-text) mb-2">
          {{ title }}
        </h3>
        <p class="text-sm text-(--ui-text-muted) leading-relaxed">
          {{ description }}
        </p>
      </div>

      <ul
        v-if="features?.length"
        class="space-y-1.5"
      >
        <li
          v-for="feature in features"
          :key="feature"
          class="flex items-center gap-2 text-sm text-(--ui-text-muted)"
        >
          <LucideCheckCircle2 class="w-3.5 h-3.5 text-primary-500 shrink-0" />
          {{ feature }}
        </li>
      </ul>

      <div class="pt-2 mt-auto">
        <UButton
          :to="to"
          variant="subtle"
          trailing-icon="i-lucide-arrow-right"
          block
        >
          Explorar
        </UButton>
      </div>
    </div>
  </UCard>
</template>
