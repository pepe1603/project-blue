import {
  ref,
  onMounted,
  onBeforeUnmount
} from 'vue'

export interface TypewriterItem {
  text: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseAfter?: number
}

export interface UseTypewriterOptions {
  items: TypewriterItem[]

  typingSpeed?: number
  deletingSpeed?: number
  pauseAfter?: number

  restartDelay?: number

  eraseBeforeRestart?: boolean

  loop?: boolean
}

export function useTypewriter(
  options: UseTypewriterOptions
) {
  const renderedTexts = ref<string[]>([])
  const activeIndex = ref(-1)
  const isTyping = ref(false)

  let controller: AbortController | null = null

  const sleep = (ms: number) =>
    new Promise<void>(
      (resolve, reject) => {
        const signal = controller?.signal
        if (signal?.aborted) {
          reject(signal.reason)
          return
        }
        const id = setTimeout(
          resolve,
          ms
        )
        signal?.addEventListener(
          'abort',
          () => {
            clearTimeout(id)
            reject(signal.reason)
          },
          { once: true }
        )
      }
    )

  const randomizeSpeed = (
    speed: number
  ) => {
    const variation
      = Math.random() * 10 - 5

    return Math.max(
      5,
      speed + variation
    )
  }

  async function typeText(
    paragraphIndex: number,
    text: string,
    speed: number
  ) {
    renderedTexts.value[paragraphIndex]
      = ''

    let current = ''

    isTyping.value = true

    for (const char of text) {
      current += char

      renderedTexts.value[
        paragraphIndex
      ] = current

      await sleep(
        randomizeSpeed(speed)
      )
    }

    isTyping.value = false
  }

  async function deleteText(
    paragraphIndex: number,
    speed: number
  ) {
    isTyping.value = true

    let current
      = renderedTexts.value[
        paragraphIndex
      ] ?? ''

    while (current.length > 0) {
      current = current.slice(
        0,
        -1
      )

      renderedTexts.value[
        paragraphIndex
      ] = current

      await sleep(
        randomizeSpeed(speed)
      )
    }

    isTyping.value = false
  }

  async function runCycle() {
    const length = options.items.length

    for (
      let index = 0;
      index < length;
      index++
    ) {
      const item
        = options.items[index]!

      activeIndex.value = index

      await typeText(
        index,
        item.text,
        item.typingSpeed
        ?? options.typingSpeed
        ?? 35
      )

      await sleep(
        item.pauseAfter
        ?? options.pauseAfter
        ?? 2000
      )
    }

    await sleep(
      options.restartDelay
      ?? 10000
    )

    if (
      options.eraseBeforeRestart
    ) {
      for (
        let index = length - 1;
        index >= 0;
        index--
      ) {
        activeIndex.value
          = index

        await deleteText(
          index,
          options.items[index]!
            .deletingSpeed
            ?? options.deletingSpeed
            ?? 15
        )
      }
    }

    renderedTexts.value
      = renderedTexts.value.slice(
        0,
        0
      )
  }

  async function start() {
    controller = new AbortController()

    try {
      do {
        await runCycle()
      } while (options.loop)
    } catch { /* aborted */ }
  }

  onMounted(() => {
    start()
  })

  onBeforeUnmount(() => {
    controller?.abort()
    controller = null
  })

  return {
    renderedTexts,
    activeIndex,
    isTyping
  }
}
