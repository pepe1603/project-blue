<script setup lang="ts">
import { ref } from 'vue'
import confetti from 'canvas-confetti'

useSeoMeta({
  title: 'Un Mensaje Especial ✨',
  description: 'Un pequeño espacio interactivo diseñado especialmente para ti.'
})

// Control del flujo del cuento (Escena actual)
const currentScene = ref(0)

// 1. Mensajes de la introducción (Tu máquina de escribir)
const introMessages = [
  {
    text: 'Hola... Qué bueno que estás aquí.',
    typingSpeed: 40,
    pauseAfter: 1500
  },
  {
    text: 'Preparé este pequeño espacio porque hay cosas que a veces es mejor decirlas con código...',
    typingSpeed: 30,
    pauseAfter: 2000
  },
  {
    text: '¿Me acompañas a dar un pequeño recorrido? Haz clic en Siguiente.',
    typingSpeed: 30,
    pauseAfter: 3000
  }
]

// 2. Tarjetas de momentos o detalles (Para la escena 2)
const memoryCards = [
  {
    title: 'Tu sonrisa',
    description: 'De esas cosas que pueden alegrar el día más gris sin que te des cuenta.',
    icon: 'LucideSparkles',
    badge: 'Favorito'
  },
  {
    title: 'Nuestras pláticas',
    description: 'Esas conversaciones donde el tiempo vuela y de repente ya es tardísimo.',
    icon: 'LucideMessageCircle',
    badge: 'Especial'
  },
  {
    title: 'Tu vibra',
    description: 'La forma en que iluminas cualquier lugar en el que estás.',
    icon: 'LucideHeart',
    badge: 'Único'
  }
]

// Lógica interactiva para el botón "NO" (Hacer que se mueva o cambie)
const noButtonText = ref('No... u.u')
const noButtonTransform = ref('translate(0px, 0px)')
const attempts = ref(0)

const moveButton = () => {
  attempts.value++

  // Cambiamos el texto dinámicamente para darle drama
  if (attempts.value === 1) noButtonText.value = '¿Segura? 🥺'
  if (attempts.value === 3) noButtonText.value = 'Piénsalo dos veces... 💔'
  if (attempts.value === 5) noButtonText.value = '¡No se vale! 🤖'

  // Calculamos una posición aleatoria para el desplazamiento (X entre -150 y 150, Y entre -80 y 80)
  const x = Math.floor(Math.random() * 300) - 150
  const y = Math.floor(Math.random() * 160) - 80

  noButtonTransform.value = `translate(${x}px, ${y}px)`
}

// Navegación

// Función que dispara la ráfaga de corazones
const lanzarCorazones = () => {
  const duration = 3 * 1000 // Duración de la animación: 3 segundos
  const end = Date.now() + duration

  const frame = () => {
    // Disparar desde el lado izquierdo de la pantalla
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.8 },
      colors: ['#ff69b4', '#ff1493', '#ff4500'] // Tonos rosa y rojo
    })

    // Disparar desde el lado derecho de la pantalla
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.8 },
      colors: ['#ff69b4', '#ff1493', '#ff4500']
    })

    if (Date.now() < end) {
      requestAnimationFrame(frame)
    }
  }

  frame()
}

// Modificamos la función que ya tenías para que dispare los corazones si la respuesta es positiva
const selectFinal = (liked: boolean) => {
  if (liked) {
    currentScene.value = 4
    // Agregamos un pequeño delay de 100ms para que la pantalla alcance a renderizarse antes de la explosión
    setTimeout(lanzarCorazones, 100)
  } else {
    currentScene.value = 5
  }
}

// audio
// Referencia para controlar el elemento HTML de audio
const audioRef = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)

// Modificamos tu función existente de avanzar escena para que también encienda la música
const nextScene = () => {
  currentScene.value++

  // Si pasa de la intro a la primera escena, activamos la música automáticamente
  if (currentScene.value === 1 && audioRef.value && !isPlaying.value) {
    audioRef.value.play()
      .then(() => { isPlaying.value = true })
      .catch(err => console.log('El navegador bloqueó el autoplay inicial:', err))
  }
}

// Función para que ella pueda pausar o reanudar la música si lo desea
const toggleMusic = () => {
  if (!audioRef.value) return
  if (isPlaying.value) {
    audioRef.value.pause()
    isPlaying.value = false
  } else {
    audioRef.value.play()
    isPlaying.value = true
  }
}
</script>

<template>
  <div>
    <!-- Elemento de audio oculto apuntando a tu archivo en la carpeta public -->
    <audio
      ref="audioRef"
      src="/bgm.mp3"
      loop
    />

    <!-- Botón flotante de control musical (Solo visible si ya pasó la pantalla de inicio) -->
    <div
      v-if="currentScene > 0"
      class="fixed top-4 right-4 z-50"
    >
      <UButton
        :icon="isPlaying ? 'i-lucide-music' : 'i-lucide-music-2'"
        :color="isPlaying ? 'primary' : 'neutral'"
        variant="soft"
        class="rounded-full p-3 animate-bounce"
        @click="toggleMusic"
      >
        {{ isPlaying ? 'Música ON' : 'Música OFF' }}
      </UButton>
    </div>

    <div class="max-w-4xl mx-auto px-4 py-12 min-h-[80vh] flex flex-col justify-between">
      <div
        v-if="currentScene === 0"
        class="space-y-12 text-center my-auto transition-all duration-500"
      >
        <div class="space-y-4">
          <h1 class="text-4xl sm:text-5xl font-bold text-default tracking-tight animate-pulse">
            Hola ✨
          </h1>
          <p class="text-lg text-muted max-w-xl mx-auto">
            Por favor, lee con atención el mensaje de abajo...
          </p>
        </div>

        <div class="max-w-2xl mx-auto min-h-30 bg-elevated p-6 rounded-xl border border-default">
          <TypewriterText
            :items="introMessages"
            :loop="false"
            :erase-before-restart="false"
            :restart-delay="60000"
          />
        </div>

        <div class="flex justify-center">
          <UButton
            size="xl"
            trailing-icon="i-lucide-arrow-right"
            @click="nextScene"
          >
            Comenzar Tour
          </UButton>
        </div>
      </div>

      <div
        v-if="currentScene === 1"
        class="space-y-8 text-center my-auto transition-all duration-500"
      >
        <UBadge
          label="Capítulo 1: La Realidad"
          variant="subtle"
          size="lg"
        />
        <h2 class="text-3xl sm:text-4xl font-bold text-default">
          Tú ya lo sabes...
        </h2>
        <p class="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          No es un secreto que me gustas mucho. Y aunque a veces soy mejor escribiendo líneas de código que expresando mis sentimientos en persona, quería construir un rincón en el internet dedicado exclusivamente a ti.
        </p>

        <div class="flex justify-center gap-4 pt-4">
          <UButton
            variant="ghost"
            icon="i-lucide-arrow-left"
            @click="prevScene"
          >
            Atrás
          </UButton>
          <UButton
            size="lg"
            trailing-icon="i-lucide-arrow-right"
            @click="nextScene"
          >
            Siguiente
          </UButton>
        </div>
      </div>

      <div
        v-if="currentScene === 2"
        class="space-y-8 transition-all duration-500"
      >
        <div class="text-center space-y-3">
          <UBadge
            label="Capítulo 2: Detalles"
            variant="subtle"
            size="lg"
          />
          <h2 class="text-3xl sm:text-4xl font-bold text-default">
            Tres cosas que me encantan de ti
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
          <UCard
            v-for="card in memoryCards"
            :key="card.title"
            class="hover:scale-105 transition-transform duration-300"
          >
            <div class="flex flex-col items-center text-center gap-4 py-4">
              <div class="p-3 bg-primary-500/10 rounded-full">
                <component
                  :is="card.icon"
                  class="w-8 h-8 text-primary-500"
                />
              </div>
              <UBadge
                :label="card.badge"
                variant="soft"
                size="sm"
                color="primary"
              />
              <h3 class="text-xl font-bold text-default">
                {{ card.title }}
              </h3>
              <p class="text-sm text-muted">
                {{ card.description }}
              </p>
            </div>
          </UCard>
        </div>

        <div class="flex justify-center gap-4">
          <UButton
            variant="ghost"
            icon="i-lucide-arrow-left"
            @click="prevScene"
          >
            Atrás
          </UButton>
          <UButton
            size="lg"
            trailing-icon="i-lucide-arrow-right"
            @click="nextScene"
          >
            Siguiente
          </UButton>
        </div>
      </div>

      <div
        v-if="currentScene === 3"
        class="space-y-8 text-center my-auto transition-all duration-500"
      >
        <UBadge
          label="Capítulo Final: El desenlace"
          variant="subtle"
          size="lg"
          color="primary"
        />
        <h2 class="text-4xl font-bold text-default tracking-tight">
          Y bueno... llegamos al final del recorrido 🧭
        </h2>
        <p class="text-lg text-muted max-w-xl mx-auto">
          Espero que te haya sacado al menos una sonrisa. Ahora te toca a ti elegir cómo termina esta historia interactiva:
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <UButton
            size="xl"
            color="primary"
            icon="LucideHeart"
            class="px-8 py-4 text-lg font-bold shadow-lg shadow-primary-500/20"
            @click="selectFinal(true)"
          >
            ¡Me encantó el detalle! 🥰
          </UButton>

          <!-- Alternativa No Tan Feliz (Se escapa al pasar el mouse o al intentar clickear en celulares) -->
          <UButton
            size="xl"
            variant="outline"
            color="neutral"
            :style="{ transform: noButtonTransform, transition: 'transform 0.2s ease-out' }"
            @mouseenter="moveButton"
            @click="moveButton"
          >
            {{ noButtonText }}
          </UButton>
        </div>
      </div>

      <div
        v-if="currentScene === 4"
        class="space-y-6 text-center my-auto transition-all duration-500 animate-fade-in"
      >
        <div class="text-6xl">
          🎉💘
        </div>
        <h2 class="text-4xl font-bold text-primary-500">
          ¡Qué alivio! Me haces muy feliz.
        </h2>
        <p class="text-xl text-muted max-w-lg mx-auto">
          Gracias por tomarte el tiempo de jugar y ver esto. Avísame por WhatsApp cuando termines de leer esto para invitarte un helado o salir por ahí. ✨
        </p>
        <div class="pt-4">
          <UButton
            variant="soft"
            icon="i-lucide-rotate-ccw"
            @click="currentScene = 0"
          >
            Ver de nuevo
          </UButton>
        </div>
      </div>

      <div
        v-if="currentScene === 5"
        class="space-y-6 text-center my-auto transition-all duration-500"
      >
        <div class="text-6xl">
          🩹
        </div>
        <h2 class="text-3xl font-bold text-default">
          ¡Vaya! No te preocupes.
        </h2>
        <p class="text-xl text-muted max-w-lg mx-auto">
          Aprecio muchísimo tu honestidad. Al menos espero que el diseño y las animaciones te hayan parecido entretenidos. ¡Seguimos siendo grandes amigos! 🚀
        </p>
        <div class="pt-4">
          <UButton
            variant="soft"
            icon="i-lucide-rotate-ccw"
            @click="currentScene = 0"
          >
            Reiniciar
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
