<template>
  <div>
    <!-- <h5 class="card-title">Overview Panel</h5> -->
    <div class="row justify-content-between">
      <div class="col-12">
        <TextBody :header="'Summary'" />
      </div>
      <div class="col-xs-12 col-sm-5">
        <Contacts :header="'Contacts'" />
      </div>
      <div class="col-1 mx-1 px-0 pt-5">
        <div class="vr h-75 mt-5 mx-auto d-none d-sm-block"></div>
      </div>
      <div class="col-xs-12 col-sm-5">
        <PersonalInfo :header="'Personal Info'" />
      </div>
      <div class="col-12">
        <Skills :header="'Technical Skills'" />
      </div>
    </div>
    <!-- <Languages :header="'Languages'"/> -->
  </div>
</template>

<script setup lang="ts">
import Contacts from './Contacts.vue';
import PersonalInfo from './PersonalInfo.vue';
import Languages from './Languages.vue';
import Skills from './Skills.vue';
import TextBody from './TextBody.vue';
</script>