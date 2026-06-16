<script setup lang="ts">
interface Props {
  text: string
}

defineProps<Props>()
</script>

<template>
  <p
    class="
      text-base
      md:text-lg
      leading-relaxed
      text-gray-700
      dark:text-gray-300
    "
  >
    {{ text }}

    <slot />
  </p>
</template>
