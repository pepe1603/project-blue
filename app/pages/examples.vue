<script setup lang="ts">
useSeoMeta({
  title: 'Ejemplos - Only Truths',
  description: 'Ejemplos de componentes: Toasts, Padre/Hijo, Parallax'
})

const parentItems = [
  {
    id: 1,
    title: 'Diseño UI',
    description: 'Interfaces modernas y responsivas',
    icon: 'i-lucide-palette'
  },
  {
    id: 2,
    title: 'Performance',
    description: 'Optimizado para velocidad máxima',
    icon: 'i-lucide-zap'
  },
  {
    id: 3,
    title: 'Accesibilidad',
    description: 'Componentes accesibles por defecto',
    icon: 'i-lucide-accessibility'
  },
  {
    id: 4,
    title: 'Responsive',
    description: 'Adaptable a cualquier dispositivo',
    icon: 'i-lucide-smartphone'
  }
]
</script>

<template>
  <div class="space-y-16 py-8">
    <section>
      <div class="mb-8">
        <h1 class="text-3xl sm:text-4xl font-bold text-(--ui-text) mb-2">
          Ejemplos de Componentes
        </h1>
        <p class="text-(--ui-text-muted)">
          Demos interactivos de Toasts, composición de componentes y efecto Parallax
        </p>
      </div>
    </section>

    <section>
      <div class="flex items-center gap-3 mb-6">
        <LucideBell class="w-6 h-6 text-primary-500" />
        <h2 class="text-2xl font-bold text-(--ui-text)">
          Toasts con Acciones
        </h2>
      </div>
      <p class="text-(--ui-text-muted) mb-6">
        Los toasts aparecen centrados en la parte superior. Prueba cada botón para ver diferentes variantes.
      </p>
      <ExamplesToastDemo />
    </section>

    <USeparator />

    <section>
      <div class="flex items-center gap-3 mb-6">
        <LucideLayers class="w-6 h-6 text-primary-500" />
        <h2 class="text-2xl font-bold text-(--ui-text)">
          Componentes Padre / Hijo
        </h2>
      </div>
      <p class="text-(--ui-text-muted) mb-6">
        El componente padre (<code class="text-primary-500">ParentCard</code>) renderiza hijos (<code class="text-primary-500">ChildItem</code>) y maneja sus eventos. Haz clic en cada tarjeta.
      </p>
      <ExamplesParentCard
        title="Características"
        :items="parentItems"
      />
    </section>

    <USeparator />

    <section>
      <div class="flex items-center gap-3 mb-6">
        <LucideMoveVertical class="w-6 h-6 text-primary-500" />
        <h2 class="text-2xl font-bold text-(--ui-text)">
          Efecto Parallax
        </h2>
      </div>
      <p class="text-(--ui-text-muted) mb-6">
        Componente reutilizable con imagen de fondo fija y overlay degradado. Haz scroll para ver el efecto.
      </p>

      <div class="space-y-6">
        <ExamplesParallaxSection
          image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600"
          title="Montañas"
          subtitle="El efecto parallax crea profundidad al hacer scroll"
          height="350px"
        />

        <ExamplesParallaxSection
          image="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600"
          title="Naturaleza"
          subtitle="Componente reutilizable con props para imagen, título y subtítulo"
          height="350px"
        />

        <ExamplesParallaxSection
          image="https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=1600"
          title="Con Slot"
          subtitle="Este ejemplo usa el slot para añadir contenido extra"
          height="400px"
        >
          <UButton
            label="Botón en slot"
            icon="i-lucide-arrow-right"
            trailing
            class="mt-4"
          />
        </ExamplesParallaxSection>
      </div>
    </section>
  </div>
</template>
