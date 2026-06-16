<script setup lang="ts">
const toast = useToast()

const showBasicToast = () => {
  toast.add({
    title: 'Toast básico',
    description: 'Este es un toast centrado por defecto',
    icon: 'i-lucide-bell'
  })
}

const showSuccessToast = () => {
  toast.add({
    title: 'Operación exitosa',
    description: 'Los datos se guardaron correctamente',
    icon: 'i-lucide-check-circle',
    color: 'success'
  })
}

const showErrorToast = () => {
  toast.add({
    title: 'Error',
    description: 'Algo salió mal',
    icon: 'i-lucide-x-circle',
    color: 'error'
  })
}

const showWarningToast = () => {
  toast.add({
    title: 'Advertencia',
    description: 'Revisa esta información',
    icon: 'i-lucide-alert-triangle',
    color: 'warning'
  })
}

const showToastWithAction = () => {
  toast.add({
    title: 'Archivo eliminado',
    description: 'El archivo se movió a la papelera',
    icon: 'i-lucide-trash-2',
    actions: [
      {
        label: 'Deshacer',
        variant: 'solid',
        color: 'primary',
        onClick: () => {
          toast.add({
            title: 'Restaurado',
            description: 'El archivo fue restaurado',
            icon: 'i-lucide-undo-2',
            color: 'success'
          })
        }
      }
    ]
  })
}

const showToastWithMultipleActions = () => {
  toast.add({
    title: 'Nueva actualización disponible',
    description: 'Versión 2.0 está lista para instalar',
    icon: 'i-lucide-download',
    actions: [
      {
        label: 'Actualizar',
        variant: 'solid',
        color: 'primary',
        onClick: () => {
          toast.add({
            title: 'Actualizando...',
            icon: 'i-lucide-loader-circle',
            color: 'info'
          })
        }
      },
      {
        label: 'Más tarde',
        variant: 'outline',
        color: 'neutral'
      }
    ]
  })
}
</script>

<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <UButton
        label="Toast básico"
        icon="i-lucide-bell"
        variant="subtle"
        block
        @click="showBasicToast"
      />

      <UButton
        label="Éxito"
        icon="i-lucide-check-circle"
        color="success"
        variant="subtle"
        block
        @click="showSuccessToast"
      />

      <UButton
        label="Error"
        icon="i-lucide-x-circle"
        color="error"
        variant="subtle"
        block
        @click="showErrorToast"
      />

      <UButton
        label="Advertencia"
        icon="i-lucide-alert-triangle"
        color="warning"
        variant="subtle"
        block
        @click="showWarningToast"
      />

      <UButton
        label="Con acción"
        icon="i-lucide-trash-2"
        variant="subtle"
        block
        @click="showToastWithAction"
      />

      <UButton
        label="Múltiples acciones"
        icon="i-lucide-download"
        variant="subtle"
        block
        @click="showToastWithMultipleActions"
      />
    </div>

    <UCard>
      <template #header>
        <div class="flex items-center gap-2">
          <LucideCode class="w-5 h-5 text-primary-500" />
          <span class="font-semibold">Código de ejemplo</span>
        </div>
      </template>

      <pre class="text-xs overflow-x-auto text-(--ui-text-muted)">
        <code>
          const toast = useToast()
          toast.add({
            title: 'Archivo eliminado',
            description: 'Se movió a la papelera',
            icon: 'i-lucide-trash-2',
            actions: [
              {
                label: 'Deshacer',
                variant: 'solid',
                color: 'primary',
                onClick: () => { ... }
              }
            ]
          })
        </code>
      </pre>
    </UCard>
  </div>
</template>
