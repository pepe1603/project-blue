<script setup lang="ts">
interface Item {
  id: number
  title: string
  description: string
  icon: string
}

defineProps<{
  title: string
  items: Item[]
}>()

const toast = useToast()

const handleItemClick = (item: Item) => {
  toast.add({
    title: `Seleccionado: ${item.title}`,
    icon: item.icon,
    color: 'info'
  })
}
</script>

<template>
  <div class="space-y-4">
    <h3 class="text-xl font-bold text-(--ui-text)">
      {{ title }}
    </h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <ExamplesChildItem
        v-for="item in items"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :icon="item.icon"
        @click="handleItemClick(item)"
      />
    </div>
  </div>
</template>
