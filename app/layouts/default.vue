<template>
  <UApp :toaster="{ position: 'top-center' }">
    <header class="fixed top-0 left-0 right-0 z-50">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/"
          class="text-xl font-bold text-(--ui-text)"
        >
          Only Truths
        </NuxtLink>

        <nav class="flex items-center gap-4">
          <UColorModeButton />
        </nav>
      </div>
    </header>

    <main class="mx-auto min-h-screen max-w-7xl px-4 pt-20 pb-8 sm:px-6 lg:px-8">
      <slot />
    </main>
  </UApp>
</template>
