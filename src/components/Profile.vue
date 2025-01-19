<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-auto my-3">
        <v-avatar :size="mdAndDown ? 200 : 300" color="surface-variant" class="">
          <v-img src="/img/profile/my-profile.jpg" lazy-src="/img/profile/my-profile.jpg" alt="Profile avatar"
            title="Profile avatar"></v-img>
        </v-avatar>
      </div>
      <div class="col-auto align-self-center ">
        <div class="text-center">
          <p class="text-light fw-bolder h2" >
            {{ `${profileData.firstName} ${profileData.middleName[0]}. ${profileData.lastName}` }}
          </p>
          <p class="cl-sandy-brown h3">Software Developer</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import { reactive, computed, defineComponent } from 'vue';
import { useDisplay } from 'vuetify';

const { mdAndDown, mdAndUp, smAndUp } = useDisplay();
const profileData = reactive({ firstName: 'Mohammad Marjani', middleName: 'Ampatua', lastName: 'Manaleseg', profileImgPath: '', })

defineComponent({
  name: 'Profile',
});


</script>
<style>
@media (min-width) {}
</style>