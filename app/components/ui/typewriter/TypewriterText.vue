<script setup lang="ts">
import type {
  TypewriterItem
} from '~/composables/useTypewriter'

import {
  useTypewriter
} from '~/composables/useTypewriter'

defineOptions({
  name: 'UiTypewriter'
})

interface Props {
  items: TypewriterItem[]

  typingSpeed?: number
  deletingSpeed?: number
  pauseAfter?: number

  restartDelay?: number

  showCursor?: boolean

  eraseBeforeRestart?: boolean

  loop?: boolean
}

const props = withDefaults(
  defineProps<Props>(),
  {
    typingSpeed: 35,
    deletingSpeed: 15,
    pauseAfter: 2000,

    restartDelay: 10000,

    showCursor: true,

    eraseBeforeRestart: true,

    loop: true
  }
)

const {
  renderedTexts,
  activeIndex
} = useTypewriter({
  items: props.items,

  typingSpeed:
    props.typingSpeed,

  deletingSpeed:
    props.deletingSpeed,

  pauseAfter:
    props.pauseAfter,

  restartDelay:
    props.restartDelay,

  eraseBeforeRestart:
    props.eraseBeforeRestart,

  loop: props.loop
})
</script>

<template>
  <div class="space-y-5">
    <TransitionGroup
      name="paragraph"
      tag="div"
    >
      <TypewriterParagraph
        v-for="(
          text,
          index
        ) in renderedTexts"
        :key="index"
        :text="text"
      >
        <TypewriterCursor
          v-if="
            showCursor && index === activeIndex
          "
        />
      </TypewriterParagraph>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.paragraph-enter-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.paragraph-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.paragraph-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
