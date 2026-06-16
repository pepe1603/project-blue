<template>
  <section class="py-24 px-6 bg-gray-950">
    <div class="max-w-6xl mx-auto space-y-10">
      <!-- Cabecera -->
      <div class="text-center space-y-3">
        <UBadge
          label="En acción"
          color="primary"
          variant="subtle"
          size="lg"
        />
        <h2 class="text-4xl font-bold">
          Míralo funcionar
        </h2>
        <p class="text-gray-400 text-lg max-w-xl mx-auto">
          Navega entre vistas sin salir de la landing —
          renderizado dinámico con
          <code class="text-primary-400 text-sm">&lt;component :is&gt;</code>
        </p>
      </div>

      <!-- Navegación entre vistas (puro UI, sin router) -->
      <nav class="flex justify-center gap-2 flex-wrap">
        <button
          v-for="view in views"
          :key="view.id"
          class="flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-200"
          :class="
            activeView === view.id
              ? 'border-primary-500 text-white bg-primary-500/10'
              : 'border-gray-700 text-gray-400 hover:border-primary-500 hover:text-white'
          "
          @click="activeView = view.id"
        >
          <UIcon
            :name="view.icon"
            class="w-4 h-4"
          />
          {{ view.label }}
        </button>
      </nav>

      <!-- Contenedor de la vista activa -->
      <div class="min-h-80 rounded-2xl border border-gray-800 bg-gray-900 p-8 overflow-hidden">
        <!-- Transición suave entre vistas -->
        <Transition
          name="fade-slide"
          mode="out-in"
        >
          <component
            :is="currentComponent"
            :key="activeView"
          />
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DesignView from './showcase/DesignView.vue'
import PerformanceView from './showcase/PerformanceView.vue'
import CommunityView from './showcase/CommunityView.vue'

// --- Definición de vistas ---
const views = [
  { id: 'design', label: 'Diseño', icon: 'i-lucide-palette', component: DesignView },
  { id: 'performance', label: 'Performance', icon: 'i-lucide-zap', component: PerformanceView },
  { id: 'community', label: 'Comunidad', icon: 'i-lucide-users', component: CommunityView }
] as const

type ViewId = typeof views[number]['id']

// --- Estado activo (no toca el router) ---
const activeView = ref<ViewId>('design')

// --- Componente a renderizar ---
const currentComponent = computed(
  () => views.find(v => v.id === activeView.value)?.component
)
</script>

<style scoped>
/* Transición suave entre vistas */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
