<template>
  <div class="app">
    <h1>ULTRAKILL</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const items = ref([]);

onMounted(async () => {
  const res = await fetch("http://localhost:3000/");
  items.value = await res.json();
});
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
li {
  list-style: none;
}
h1, li {
  color: red;
}
</style>
