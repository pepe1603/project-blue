<script setup lang="ts">
useSeoMeta({
  title: 'Only Truths - Tour de la Plantilla',
  description: 'Recorre cada sección de esta plantilla Nuxt 4 y descubre todo lo que incluye.'
})

const heroMessages = [
  {
    text: 'Bienvenido a Only Truths.',
    typingSpeed: 40,
    pauseAfter: 1500
  },
  {
    text: 'Una plantilla moderna con Nuxt 4, TypeScript y Nuxt UI.',
    typingSpeed: 25,
    pauseAfter: 2000
  },
  {
    text: 'Explora cada sección y descubre todo lo que puedes construir.',
    typingSpeed: 30,
    pauseAfter: 3000
  }
]

const tourStops = [
  {
    title: 'Landing Page',
    description: 'Una landing completa con hero, tabs, showcase dinámico, features, testimonios y CTA. Lista para producción.',
    icon: 'LucideLayout',
    to: '/landing',
    badge: 'Completa',
    features: [
      'Hero con animaciones',
      'Tabs interactivos',
      'Showcase con <component :is>',
      'Testimonios y CTA'
    ]
  },
  {
    title: 'Ejemplos de Componentes',
    description: 'Demos interactivos de los patrones más comunes: toasts, composición padre/hijo y efecto parallax.',
    icon: 'LucideBlocks',
    to: '/examples',
    badge: 'Interactivo',
    features: [
      'Toasts con acciones',
      'Componentes padre/hijo',
      'Efecto parallax',
      'Código de ejemplo incluido'
    ]
  },
  {
    title: 'Terminal Window',
    description: 'Componente reutilizable con estilo de terminal. Ideal para mostrar comandos, logs o demos técnicas.',
    icon: 'LucideTerminal',
    to: '/terminal',
    badge: 'Reutilizable',
    features: [
      'Layout dedicado',
      'Slot para contenido',
      'Estilo macOS terminal',
      'Responsive'
    ]
  }
]

const stats = [
  { value: 5, label: 'Páginas', suffix: '' },
  { value: 15, label: 'Componentes', suffix: '+' },
  { value: 3, label: 'Layouts', suffix: '' },
  { value: 100, label: 'TypeScript', suffix: '%' }
]
</script>

<template>
  <div class="space-y-20 py-8">
    <section class="text-center space-y-8">
      <div class="space-y-4">
        <h1 class="text-4xl sm:text-5xl font-bold text-(--ui-text) tracking-tight">
          Only Truths
        </h1>
        <p class="text-lg text-(--ui-text-muted) max-w-xl mx-auto">
          Plantilla Nuxt 4 con todo lo necesario para arrancar tu próximo proyecto.
        </p>
      </div>

      <div class="max-w-2xl mx-auto min-h-[120px]">
        <TypewriterText
          :items="heroMessages"
          :loop="false"
          :erase-before-restart="false"
          :restart-delay="60000"
        />
      </div>
    </section>

    <USeparator />

    <section>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
        <UiStatsCounter
          v-for="stat in stats"
          :key="stat.label"
          :value="stat.value"
          :label="stat.label"
          :suffix="stat.suffix"
        />
      </div>
    </section>

    <USeparator />

    <section>
      <div class="text-center mb-10">
        <UBadge
          label="Tour interactivo"
          variant="subtle"
          size="lg"
          class="mb-4"
        />
        <h2 class="text-3xl sm:text-4xl font-bold text-(--ui-text) mb-3">
          Explora la plantilla
        </h2>
        <p class="text-(--ui-text-muted) max-w-lg mx-auto">
          Cada página es una parada del tour. Navega y descubre los componentes y patrones incluidos.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <UiTourCard
          v-for="stop in tourStops"
          :key="stop.to"
          :title="stop.title"
          :description="stop.description"
          :icon="stop.icon"
          :to="stop.to"
          :badge="stop.badge"
          :features="stop.features"
        />
      </div>
    </section>

    <USeparator />

    <section>
      <div class="text-center mb-10">
        <h2 class="text-3xl sm:text-4xl font-bold text-(--ui-text) mb-3">
          Stack tecnológico
        </h2>
        <p class="text-(--ui-text-muted) max-w-lg mx-auto">
          Construido con las mejores herramientas del ecosistema Vue/Nuxt.
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <UCard
          v-for="tech in [
            { name: 'Nuxt 4', icon: 'LucideBox' },
            { name: 'TypeScript', icon: 'LucideFileCode' },
            { name: 'Nuxt UI', icon: 'LucidePalette' },
            { name: 'Tailwind CSS', icon: 'LucideWind' },
            { name: 'Lucide Icons', icon: 'LucideSparkles' },
            { name: 'Google Fonts', icon: 'LucideType' }
          ]"
          :key="tech.name"
          class="text-center"
        >
          <div class="flex flex-col items-center gap-2 py-2">
            <component
              :is="tech.icon"
              class="w-6 h-6 text-primary-500"
            />
            <span class="text-sm font-medium text-(--ui-text)">
              {{ tech.name }}
            </span>
          </div>
        </UCard>
      </div>
    </section>
  </div>
</template>
