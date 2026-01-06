<template>
  <label class="checkbox-container">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
      class="checkbox-input"
    />
    <span class="checkbox-checkmark"></span>
    <span class="checkbox-label">
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
interface Props {
	modelValue: boolean;
}

defineProps<Props>();
defineEmits<{
	"update:modelValue": [value: boolean];
}>();
</script>

<style scoped>
.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  gap: 12px;
  padding: 8px 0;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox-checkmark {
  position: relative;
  height: 20px;
  width: 20px;
  background-color: #f5f5f5;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.checkbox-container:hover .checkbox-checkmark {
  border-color: #9ca3af;
}

.checkbox-input:checked ~ .checkbox-checkmark {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

.checkbox-checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-input:checked ~ .checkbox-checkmark:after {
  display: block;
}

.checkbox-label {
  font-size: 16px;
  color: #374151;
}
</style>
