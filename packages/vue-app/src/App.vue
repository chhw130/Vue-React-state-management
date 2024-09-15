<template>
  <div class="app">
    <h1>Vue Counter</h1>
    <counter-display :count="count" />
    <counter-button :on-click-increment="handleIncrement" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CounterButton from '@/components/CounterButton.vue'
import CounterDisplay from '@/components/CounterDisplay.vue'

const count = ref<number>(0)

const handleIncrement = () => {
  count.value++
}

console.log(`%cCurrent Count : ${count.value}`, 'background-color: yellow; color: black')
</script>
