<template>
  <div class="mt-4">
    <p class="h1 m-0 cl-sandy-brown text-start">{{ header }}</p>
    <hr class="hr" />
    <div class="row">
      <div class="col-12" v-for="(item, i) in data" :key="i">
        <div class="contact-info__item mt-3 cl-dark-blue">
          <div class="contact-info__icon">
            <v-icon size="40">{{ item.icon }}</v-icon>
          </div>
          <div class="text-start ms-3">
            <p class="fw-bold m-0">{{ item.title }}</p>
            <a :href="item.href" :target="item.target">{{ item.value }}</a>
          </div>
        </div>
      </div>
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

const data = reactive([
  {
    icon: 'mdi-cellphone-sound',
    title: 'Phone',
    value: '+63 916 675 0882',
    href: 'tel:+639166750882',
    target: '_blank',
  },
  // {
  //     icon: 'mdi-message-text',
  //     title: 'Telegram',
  //     value: '@fordiquez',
  //     href: 'https://t.me/fordiquez',
  //     target: '_blank',
  // },
  {
    icon: 'mdi-gmail',
    title: 'Gmail',
    value: 'manalesegmarjani@gmail.com',
    href: 'mailto:manalesegmarjani@gmail.com',
    target: '_blank',
  },
  {
    icon: 'mdi-github',
    title: 'GitHub',
    value: 'Marj888',
    href: 'https://github.com/Marj888',
    target: '_blank',
  },
  {
    icon: 'mdi-linkedin',
    title: 'LinkedIn',
    value: 'Mohammad Marjani Manaleseg',
    href: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile',
    target: '_blank',
  },
  {
    icon: 'mdi-skype',
    title: 'Skype',
    value: 'live:.cid.5e07eb42ab294cc2',
    href: 'https://join.skype.com/invite/yLieGlHzM5ei',
    target: '_blank',
  },
]);
</script>

<style scoped>
.contact-info__item {
  display: flex;
  align-items: flex-end;
  width: 300px;
}

.contact-info__content {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
</style>
