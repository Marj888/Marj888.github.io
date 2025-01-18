<template>
  <div class="mt-4">
    <p class="h1 m-0 cl-sandy-brown">{{ header }}</p>
    <hr class="hr"/>
    <div class="personal-info__item mt-3 cl-dark-blue" v-for="(item, i) in data" :key="i">
      <div class="">
        <v-icon size="40">{{ item.icon }}</v-icon>
      </div>
      <div class="text-start ms-3">
        <p class="fw-bold m-0">{{ item.title }}</p>
        <p class="m-0 cl-ocean-blue">{{ item.value }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, reactive } from 'vue';

defineComponent({
  name: 'PersonalInfo',
});

defineProps({
  header: String,
});

const data = reactive([
  {
    icon: 'mdi-flag-variant',
    title: 'Nationality',
    value: 'Filipino',
  },
  {
    icon: 'mdi-calendar-account',
    title: 'Birth date',
    value: '19 November, 1994',
  },
  {
    icon: 'mdi-city',
    title: 'Birth place',
    value: 'Marawi City, Philippines',
  },
  {
    icon: 'mdi-compass-rose',
    title: 'Location',
    value: 'Iligan City, Philippines',
  },
  {
    icon: 'mdi-account-voice',
    title: 'Language',
    value: 'Maranao, Tagalog, English',
  },
]);
</script>

<style scoped>
.personal-info__item {
  display: flex;
  align-items: flex-end;
}

.personal-info__content {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
</style>
