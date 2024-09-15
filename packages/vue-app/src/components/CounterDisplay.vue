<template>
  <h2 class="counter-display">Count: {{ count }}</h2>
</template>

<script setup lang="ts">
import {  defineProps } from 'vue';

interface  CounterDisplayProps {
  count : number
}

 defineProps<CounterDisplayProps>()
</script>

