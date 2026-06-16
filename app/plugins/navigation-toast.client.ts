// app/plugins/navigation-toast.client.ts

export default defineNuxtPlugin(() => {
  const router = useRouter()
  const toast = useToast()
  
  // Anti-spam: Guardamos el tiempo del último toast mostrado
  let lastToastTime = 0
  const COOLDOWN_MS = 2500 // Esperar mínimo 2.5 segundos entre notificaciones

  router.beforeEach((to, from) => {
    
    // 🚨 CASO 1: El usuario intenta entrar a una URL distinta de la principal
    if (to.path !== '/') {
      // Redirigimos forzosamente a la página principal
      return '/'
    }

    // 🎯 CASO 2: El usuario ya está en '/' e intenta navegar de nuevo a '/'
    if (to.path === '/' && to.fullPath === from.fullPath) {
      const now = Date.now()
      
      // Si da clics ultra rápidos, bloqueamos la acción en silencio
      if (now - lastToastTime < COOLDOWN_MS) {
        return false
      }

      // Actualizamos el marcador de tiempo
      lastToastTime = now

      // Mostramos la alerta interactiva usando Nuxt UI
      toast.add({
        title: 'Ya estás aquí 👀',
        description: 'El universo no ha cambiado desde tu último clic, todo sigue listo para ti.',
        color: 'warning',
        icon: 'i-lucide-alert-circle',
        duration: 3000
      })

      // Cancela la navegación redundante
      return false
    }
  })
})