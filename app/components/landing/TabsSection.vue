<template>
  <section class="py-24 px-6 min-h-75 max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold">
        ¿Cómo funciona?
      </h2>
      <p class="text-gray-400 mt-3 text-lg">
        Explora cada aspecto de nuestra plataforma
      </p>
    </div>

    <UTabs
      :items="tabs"
      class="w-full"
      :ui="{
        list: 'flex gap-2 border-b border-gray-800 mb-8',
        trigger: 'pb-3 px-4 font-semibold text-gray-400 data-[state=active]:text-primary-400 data-[state=active]:border-b-2 data-[state=active]:border-primary-400 transition-all'
      }"
    >
      <!-- Vista 1: Analíticas -->
      <template #analytics>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">
              Analíticas en tiempo real
            </h3>
            <p class="text-gray-400">
              Visualiza el comportamiento de tus usuarios con dashboards
              interactivos actualizados al instante.
            </p>
            <ul class="space-y-2">
              <li
                v-for="feat in analyticsFeatures"
                :key="feat"
                class="flex items-center gap-2 text-gray-300"
              >
                <UIcon
                  name="i-lucide-check-circle"
                  class="text-primary-400 shrink-0"
                />
                {{ feat }}
              </li>
            </ul>
          </div>
          <div class="bg-gray-900 rounded-2xl p-8 border border-gray-800 flex items-center justify-center h-64">
            <UIcon
              name="i-lucide-bar-chart-2"
              class="text-primary-400 w-24 h-24 opacity-60"
            />
          </div>
        </div>
      </template>

      <!-- Vista 2: Colaboración -->
      <template #collaboration>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="bg-gray-900 rounded-2xl p-8 border border-gray-800 flex items-center justify-center h-64">
            <UIcon
              name="i-lucide-users"
              class="text-emerald-400 w-24 h-24 opacity-60"
            />
          </div>
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">
              Trabajo en equipo
            </h3>
            <p class="text-gray-400">
              Invita a tu equipo, asigna roles y colabora en tiempo real
              sin fricciones ni límites.
            </p>
            <UButton
              label="Invitar equipo"
              color="success"
              variant="soft"
            />
          </div>
        </div>
      </template>

      <!-- Vista 3: Seguridad -->
      <template #security>
        <div class="grid md:grid-cols-3 gap-6">
          <UCard
            v-for="item in securityItems"
            :key="item.title"
            class="bg-gray-900 border border-gray-800"
          >
            <template #header>
              <UIcon
                :name="item.icon"
                class="text-amber-400 w-8 h-8"
              />
            </template>
            <h4 class="font-semibold text-lg mb-1">
              {{ item.title }}
            </h4>
            <p class="text-gray-400 text-sm">
              {{ item.desc }}
            </p>
          </UCard>
        </div>
      </template>

      <!-- Vista 4: Integraciones -->
      <template #integrations>
        <div class="text-center space-y-6">
          <h3 class="text-2xl font-bold">
            +50 integraciones disponibles
          </h3>
          <p class="text-gray-400 max-w-xl mx-auto">
            Conecta con tus herramientas favoritas en un solo clic.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <UBadge
              v-for="tool in integrations"
              :key="tool"
              :label="tool"
              color="neutral"
              variant="outline"
              size="lg"
            />
          </div>
        </div>
      </template>
    </UTabs>
  </section>
</template>

<script setup lang="ts">
const tabs = [
  { label: 'Analíticas', slot: 'analytics' as const },
  { label: 'Colaboración', slot: 'collaboration' as const },
  { label: 'Seguridad', slot: 'security' as const },
  { label: 'Integraciones', slot: 'integrations' as const }
]

const analyticsFeatures = [
  'Métricas de conversión en vivo',
  'Reportes exportables a PDF/CSV',
  'Alertas personalizadas por umbral'
]

const securityItems = [
  { icon: 'i-lucide-shield-check', title: 'Autenticación 2FA', desc: 'Protege tu cuenta con doble factor.' },
  { icon: 'i-lucide-lock', title: 'Cifrado AES-256', desc: 'Todos tus datos encriptados en reposo.' },
  { icon: 'i-lucide-eye-off', title: 'Auditoría de accesos', desc: 'Historial completo de quién accede a qué.' }
]

const integrations = ['Stripe', 'Slack', 'GitHub', 'Notion', 'Figma', 'Zapier', 'HubSpot', 'Vercel']
</script>
