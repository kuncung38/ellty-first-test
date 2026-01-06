<script setup lang="ts">
</script>

<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  width: 100%;
  height: 40px;
  background-color: #FFCE22;
  border-radius: 4px;
  border: none;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

button:hover {
  background-color: #FFD84D;
}
</style>
