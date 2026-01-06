<script setup lang="ts">
import Button from "./Button.vue";
import Checklist from "./Checklist.vue";
import Line from "./Line.vue";

const list = [
	{
		label: "Page 1",
	},
	{
		label: "Page 2",
	},
	{
		label: "Page 3",
	},
	{
		label: "Page 4",
	},
];
</script>

<template>
  <div class="form-container">
    <Checklist label="All pages" />
    <Line />
    <Checklist v-for="item in list" :key="item.label" :label="item.label" />
    <Line />

    <div class="done-button-container">
      <Button>
        <p>Done</p>
      </Button>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  border-radius: 12px;
  box-shadow:
    0px 8px 15px 0px #1414141F,
    0px 0px 4px 0px #1414141A;
  width: 370px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: fit-content;
  border: 1px solid #EEEEEE;
  border-radius: 6px;
}

.done-button-container {
  padding: 10px 15px 10px 15px;
}
</style>
