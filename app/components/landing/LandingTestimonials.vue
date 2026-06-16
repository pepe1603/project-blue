<script setup lang="ts">
interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
}

defineProps<{
  heading: string
  testimonials: Testimonial[]
}>()
</script>

<template>
  <section class="py-16 sm:py-24">
    <div class="text-center mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold text-(--ui-text) mb-4">
        {{ heading }}
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <UCard
        v-for="(testimonial, index) in testimonials"
        :key="index"
      >
        <div class="flex flex-col gap-4">
          <LucideQuote class="w-8 h-8 text-primary-500/40" />
          <p class="text-(--ui-text) italic leading-relaxed">
            "{{ testimonial.quote }}"
          </p>
          <div class="flex items-center gap-3 mt-auto pt-4 border-t border-(--ui-border)">
            <UAvatar
              :src="testimonial.avatar"
              :alt="testimonial.name"
              size="md"
            />
            <div>
              <p class="text-sm font-semibold text-(--ui-text)">
                {{ testimonial.name }}
              </p>
              <p class="text-xs text-(--ui-text-muted)">
                {{ testimonial.role }}
              </p>
            </div>
          </div>
        </div>
      </UCard>
    </div>
  </section>
</template>
