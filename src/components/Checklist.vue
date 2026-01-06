<script setup lang="ts">
defineProps({
	label: String,
});
</script>

<template>
  <label class="checklist">
    <p>{{ label }}</p>

    <div class="checkbox-container">
      <input type="checkbox" />

      <svg class="checkmark" width="17" height="12" viewBox="0 0 17 12" fill="none">
        <path d="M1 6L6 11L16 1" stroke="currentColor" stroke-width="1" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </div>
  </label>

</template>

<style scoped>
.checklist {
  height: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 15px 8px 22px;
  cursor: pointer;
}

input {
  display: none;
}

.checkbox-container {
  width: 23px;
  height: 23px;
  border: 1px solid #CDCDCD;
  border-radius: 6px;
  opacity: 60%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkmark {
  display: none;
  color: #E3E3E3;
  pointer-events: none;
}

/* Hover unchecked */
.checklist:hover .checkbox-container {
  opacity: 100%;
}

.checklist:hover .checkmark {
  display: block;
}

/**/

/* When clicked, unchecked */
.checklist:active .checkbox-container {
  outline: 3px solid rgba(36, 105, 246, 0.1);
  outline-offset: 0px;
  opacity: 100%;
}

.checklist:active .checkmark {
  display: block;
  color: #878787;
}

/**/

/* Checked */
.checkbox-container:has(input:checked) {
  background-color: #2469F6;
  opacity: 100%;
}

.checkbox-container:has(input:checked) .checkmark {
  display: block;
  color: #FFFFFF;
}

.checklist:hover .checkbox-container:has(input:checked) {
  background-color: #5087F8;
  opacity: 100%;
}
</style>
