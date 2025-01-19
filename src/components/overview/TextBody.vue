<template>
  <div class="mt-4">
    <p class="h1 m-0 cl-sandy-brown">{{ header }}</p>
    <hr class="hr" />
    <div class="text-message-container cl-dark-blue mx-auto">
      <p class="" v-for="(item, i) in data" :key="i">{{ item }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, reactive } from 'vue';

defineComponent({
  name: 'ContactInfo',
});

defineProps({
  header: String,
});

const data = reactive([`I have worked in Wiflab for about 3 years, through this company I
have broadened my knowledge in Web Development applications.
From trainee to a full stack developer.`, `I have helped in the development of a wide variety of System
applications mostly based in ASP.NET and Vue.js framework.`])

</script>

<style scoped>
  .text-message-container {
    max-width: 600px;
  }
</style>
