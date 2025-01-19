<template>
  <div class="mt-4">
    <p class="h1 m-0 text-center cl-sandy-brown">{{ header }}</p>
    <hr class="hr" />
    <div class="row justify-content-md-center">
      <div class="col-auto" v-for="(item, i) in data" :key="i">
        <div class="skill-item mt-3 cl-dark-blue ">
          <div class="">
            <v-icon size="40">
              <img :src="item.icon" alt="Custom Icon" />
            </v-icon>
          </div>
          <div class="text-start ms-3">
            <p class="fw-bold m-0">{{ item.title }}</p>
            <p class="m-0 cl-ocean-blue">{{ item.experience }} year experience</p>
          </div>
        </div>
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
    icon: '/img/icons/c-sharp.svg',
    title: 'C#',
    experience: 3,
  },
  {
    icon: '/img/icons/aspdotnet.svg',
    title: 'ASP.NET Core',
    experience: 3,
  },
  {
    icon: '/img/icons/microsoft-sql-server-logo.svg',
    title: 'MS SQL Server',
    experience: 3,
  },
  {
    icon: '/img/icons/mysql-original-wordmark.svg',
    title: 'MS SQL Server',
    experience: 1,
  },
  {
    icon: '/img/icons/javascript-js.svg',
    title: 'Javascript',
    experience: 3,
  },
  {
    icon: '/img/icons/html-5.svg',
    title: 'HTML 5',
    experience: 3,
  },
  {
    icon: '/img/icons/css-3.svg',
    title: 'CSS 3',
    experience: 3,
  },
  {
    icon: '/img/icons/vue.svg',
    title: 'Vue.js 3',
    experience: 3,
  },
  {
    icon: '/img/icons/laravel.svg',
    title: 'Laravel',
    experience: 1,
  },
  {
    icon: '/img/icons/visual-studio.svg',
    title: 'Visual Studio',
    experience: 3,
  },
  {
    icon: '/img/icons/visual-studio-code.svg',
    title: 'Visual Studio Code',
    experience: 3,
  },
]);
</script>

<style scoped>
.skill-item {
  display: flex;
  align-items: flex-end;
  width: 220px;
}

.skill-item-content {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
</style>
