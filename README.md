# Core Game Module

## Import Game to PWA

```
  resolve: {
    alias: {
      "core-game": path.resolve(__dirname, "../core-game/src")
    }
  }
```

## PWA Game Page

```
<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue"
import { createGame, destroyGame, on } from "core-game"

onMounted(() => {
  createGame("game-container")

  on("score", (data) => {
    console.log("Score from game:", data.value)
  })
})

onBeforeUnmount(() => {
  destroyGame()
})
</script>

<template>
  <div id="game-container" class="w-full h-full"></div>
</template>
```
