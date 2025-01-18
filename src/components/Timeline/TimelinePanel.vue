<template>
  <div class="timeline mt-5">
    <p class="h1 m-0 cl-sandy-brown">Education & Work</p>
    <hr class="hr" />
    <v-timeline class="mt-5" side="end">
      <v-timeline-item v-for="timeline in timelines" :key="timeline.id" :dot-color="timeline.color"
        :icon="timeline.icon" size="large">
        <template v-slot:opposite>
          <div :class="`pt-1 headline font-weight-bold text-button text-${timeline.color}`" v-text="timeline.period">
          </div>
        </template>
        <div class="timeline-item-container ">
          <h2 :class="`mt-n1 headline font-weight-light mb-2 text-${timeline.color}`">
            {{ timeline.title }}
          </h2>
          <h5 :class="`text-button text-${timeline.color}`">{{ timeline.position }}</h5>
          <span class="text-subtitle-2">{{ timeline.description }}</span>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, reactive } from 'vue';

defineComponent({
  name: 'Timelines',
});
const timelines = reactive([
  {
    id: 0,
    icon: 'mdi-book-education',
    color: 'cyan lighten-1',
    title: 'AICS Batangas',
    position: 'Com Tech',
    period: '2014 — 2016',
    description: '2 years course studying Associate in Computer Technology',
  },
  {
    id: 1,
    icon: 'mdi-book-education',
    color: 'amber darken-1',
    title: 'STI Batangas',
    position: 'BS Information Technology',
    period: '20216 - 2020',
    description: '4 years course studying Bachelor of Science in Information Technology',
  },
  {
    id: 2,
    icon: 'mdi-briefcase-variant',
    color: 'blue-darken-3',
    title: 'Wiflab',
    position: 'Junior Software Engineer',
    period: '2021 - 2024',
    description: 'Developing custimized web application system',
  },
]);
</script>
<style scoped>
.timeline-item-container {
  width: 150px;
}
</style>
