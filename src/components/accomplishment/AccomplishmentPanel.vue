<template>
  <div>
    <h5 class="card-title">Accomplishment Panel</h5>
    <!-- <div class="card p-2" v-for="(item, index) in data" :key="index">
      <div class="row">
        <div class="col-6">
          <v-img :src="item.images[0]" alt="Example Image" aspect-ratio="16/9"
            lazy-src="https://example.com/placeholder.jpg" max-width="500px" />
        </div>
        <div class="col">
          <p>{{ item.title }}</p>
          <hr class="hr" />
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div> -->
    <div class="row justify-content-center">
      <div class="col-6 mt-2" v-for="(item, index) in data" :key="index">
        <div class="card mx-auto" style="max-width: 500px; height: 400px;">
          <!-- <img src="..." class="card-img-top" alt="..."> -->
          <v-img class="card-img-top" :src="item.images[0]" alt="Example Image" aspect-ratio="16/9"
            :lazy-src="item.images[0]" max-width="800px" />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, reactive } from 'vue';

const data = reactive([
  {
    title: 'LFPH Quora',
    description: 'Employee Data System for LittelFuse based in Batangas',
    images: ['/img/projects/lfphquora/img-01.png']
  },
  {
    title: 'MES Paperless',
    description: 'Production Data System for LittelFuse based in Batangas',
    images: ['/img/projects/mespaperless/img-01.png', '/img/projects/mespaperless/img-02.png', '/img/projects/mespaperless/img-03.png']
  },
  {
    title: 'SMS Blast',
    description: 'Messaging System for LittelFuse based in Batangas',
    images: ['/img/projects/smsblast/img-01.png']
  },
  {
    title: 'IE Database',
    description: 'Employee Data System for LittelFuse based in Batangas',
    images: ['/img/projects/iedatabase/img-01.png']
  },
  // { 
  //   title: 'RSFMS',
  //   description: 'Furniture Inventory System for LittelFuse based in Batangas',
  //   images: ['/img/projects/lfphquora/img-01.png']
  // },
])
</script>