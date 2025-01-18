<template>
  <div class="container">
    <div class="bg-dark-blue p-3">
      <Profile />
      <div class="card text-center mt-3">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <!-- <a class="nav-link active" aria-current="true" href="#">Active</a> -->
              <button class="nav-link" :class="overviewPanelVisibility ? 'active' : ''"
                @click="overviewPanelClicked">Overview</button>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Link</a> -->
              <button class="nav-link" :class="accomplishmentPanelVisibility ? 'active' : ''"
                @click="accomplishmentPanelClicked">Projects</button>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Disabled</a> -->
              <button class="nav-link" :class="timelinePanelVisiblity ? 'active' : ''"
                @click="timelinePanelClicked">Experience</button>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <!-- <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a> -->
          <OverviewPanel v-show="overviewPanelVisibility" />
          <AccomplishmentPanel v-show="accomplishmentPanelVisibility" />
          <TimelinePanel v-show="timelinePanelVisiblity" />
        </div>
      </div>

    </div>
    <v-footer class="bg-grey-lighten-1">
        <v-row justify="center" no-gutters>
          <v-btn v-for="link in links" :key="link" class="mx-2" color="white" rounded="xl" variant="text">
            {{ link }}
          </v-btn>
          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
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
