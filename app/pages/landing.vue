<script setup lang="ts">
useSeoMeta({
  title: 'Landing Page - Only Truths',
  description: 'Ejemplo de Landing Page con renderizado de múltiples sub-vistas'
})

const features = [
  {
    icon: 'LucideZap',
    title: 'Ultra Rápido',
    description: 'Rendimiento optimizado con Nuxt 4 y server-side rendering para tiempos de carga mínimos.'
  },
  {
    icon: 'LucideShield',
    title: 'Seguro por Defecto',
    description: 'Las mejores prácticas de seguridad integradas desde el primer momento sin configuración extra.'
  },
  {
    icon: 'LucidePalette',
    title: 'UI Moderna',
    description: 'Componentes preconstruidos con Nuxt UI que se adaptan a tu marca con temas personalizables.'
  },
  {
    icon: 'LucideCode',
    title: 'Developer First',
    description: 'TypeScript nativo, auto-imports y una experiencia de desarrollo excepcional.'
  },
  {
    icon: 'LucideGlobe',
    title: 'SEO Optimizado',
    description: 'Meta tags automáticos, sitemap generado y estructura semántica para posicionamiento web.'
  },
  {
    icon: 'LucideSmartphone',
    title: '100% Responsive',
    description: 'Diseño adaptable a cualquier dispositivo con breakpoints inteligentes y mobile-first.'
  }
]

const testimonials = [
  {
    name: 'María García',
    role: 'Frontend Lead en TechCorp',
    quote: 'Esta plantilla nos ahorró semanas de configuración. El código es limpio y las convenciones son excelentes.',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    name: 'Carlos López',
    role: 'CTO en StartupXYZ',
    quote: 'La mejor plantilla de Nuxt que hemos usado. Los ejemplos incluidos cubren el 90% de los casos de uso comunes.',
    avatar: 'https://i.pravatar.cc/150?img=3'
  },
  {
    name: 'Ana Martínez',
    role: 'Fullstack Developer',
    quote: 'Me encanta cómo todo está organizado. Los componentes son reutilizables y el rendimiento es increíble.',
    avatar: 'https://i.pravatar.cc/150?img=5'
  }
]
</script>

<template>
  <div>
    <LandingHero
      title="Construye tu próximo proyecto en minutos"
      subtitle="Nuevo: Renderizado de Múltiples Vistas"
      description="Esta landing page demuestra cómo una sola página puede renderizar múltiples sub-vistas como componentes independientes. Cada sección es un componente reutilizable."
    />

    <USeparator />

    <LandingTabsSection />

    <USeparator />

    <LandingShowcaseSection />

    <USeparator />

    <LandingFeatures
      heading="Características Principales"
      :features="features"
    />

    <USeparator />

    <LandingTestimonials
      heading="Lo que dicen los desarrolladores"
      :testimonials="testimonials"
    />

    <USeparator />

    <LandingCta
      heading="¿Listo para empezar?"
      description="Únete a miles de desarrolladores que ya usan esta plantilla para crear aplicaciones increíbles."
    />
  </div>
</template>
