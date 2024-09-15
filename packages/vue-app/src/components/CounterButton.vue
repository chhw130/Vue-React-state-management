<template>
  <button class="counter-button" @click="onClickIncrement">
    Increment
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface CounterButtonProps {
  onClickIncrement : () => void
}

defineProps<CounterButtonProps>()

</script>

