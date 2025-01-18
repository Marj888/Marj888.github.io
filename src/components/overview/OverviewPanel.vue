<template>
  <div>
    <!-- <h5 class="card-title">Overview Panel</h5> -->
    <TextBody :header="'Summary'"/>
    <Contacts :header="'Contacts'"/>
    <PersonalInfo :header="'Personal Info'"/>
    <!-- <Languages :header="'Languages'"/> -->
    <Skills :header="'Technical Skills'"/>
  </div>
</template>

<script setup lang="ts">
import Contacts from './Contacts.vue';
import PersonalInfo from './PersonalInfo.vue';
import Languages from './Languages.vue';
import Skills from './Skills.vue';
import TextBody from './TextBody.vue';
</script>