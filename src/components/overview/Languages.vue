<template>
  <div class="mt-4">
      <p class="h1 m-0 cl-sandy-brown">{{ header }}</p>
    <hr class="hr"/>
    <div v-for="(language, i) in languages" :key="i" class="mt-3">
          <span class="text-subtitle-1 font-weight-light">{{ language.name }}</span>
          <div class="d-flex align-center">
              <v-progress-linear color="deep-purple-accent-1" :model-value="language.value"></v-progress-linear>
              <span class="text-subtitle-1 font-weight-light ml-2">{{ language.value }}%</span>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, reactive } from 'vue';

defineComponent({
    name: 'Languages',
});

defineProps({
    header: String,
});

const languages = reactive([
    {
        name: 'Maranao',
        value: 100,
    },
    {
        name: 'Tagalog',
        value: 100,
    },
    {
        name: 'English',
        value: 50,
    },
]);
</script>
