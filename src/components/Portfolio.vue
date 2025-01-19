<template>
  <div class="container">
    <div class="bg-dark-blue p-3">
      <Profile />
      <div class="card text-center mt-3">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <button class="nav-link" :class="overviewPanelVisibility ? 'active' : ''"
                @click="overviewPanelClicked">Overview</button>
            </li>
            <li class="nav-item">
              <button class="nav-link" :class="accomplishmentPanelVisibility ? 'active' : ''"
                @click="accomplishmentPanelClicked">Projects</button>
            </li>
            <li class="nav-item">
              <button class="nav-link" :class="timelinePanelVisiblity ? 'active' : ''"
                @click="timelinePanelClicked">Experience</button>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <OverviewPanel v-show="overviewPanelVisibility" />
          <AccomplishmentPanel v-show="accomplishmentPanelVisibility" />
          <TimelinePanel v-show="timelinePanelVisiblity" />
        </div>
      </div>

    </div>
    <v-footer class="bg-dark-blue">
      <v-row justify="center" no-gutters>
        <!-- <v-btn v-for="link in links" :key="link" class="mx-2" color="white" rounded="xl" variant="text">
            {{ link }}
          </v-btn> -->
        <v-col class="text-center mt-4" cols="12">
          <!-- <p class="text-light">
            © 2025 All Rights Reserved. Developed with
            <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>,
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a>, and
            <a href="https://vuetifyjs.com/" target="_blank" rel="noopener">Vuetify</a> by Mohammad Marjani
          </p> -->
          <hr class="hr text-light">
          <p class="text-light my-0">
            ©2025 / ALL RIGHT RESERVED / MANALESEG MOHAMMAD MARJANI
          </p>
          <p class="text-light">Developed with
            <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>,
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a>, and
            <a href="https://vuetifyjs.com/" target="_blank" rel="noopener">Vuetify</a></p>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Profile from './Profile.vue'
import OverviewPanel from './overview/OverviewPanel.vue';
import AccomplishmentPanel from './accomplishment/AccomplishmentPanel.vue';
import TimelinePanel from './Timeline/TimelinePanel.vue';

const overviewPanelVisibility = ref(true);
const accomplishmentPanelVisibility = ref(false);
const timelinePanelVisiblity = ref(false);
const links = ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us'];

const overviewPanelClicked = () => {
  overviewPanelVisibility.value = true;
  accomplishmentPanelVisibility.value = false;
  timelinePanelVisiblity.value = false;
}

const accomplishmentPanelClicked = () => {
  overviewPanelVisibility.value = false;
  accomplishmentPanelVisibility.value = true;
  timelinePanelVisiblity.value = false;
}

const timelinePanelClicked = () => {
  overviewPanelVisibility.value = false;
  accomplishmentPanelVisibility.value = false;
  timelinePanelVisiblity.value = true;
}

</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
