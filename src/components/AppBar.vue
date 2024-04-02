<script setup>
import { useStore } from '@/stores/store'

const store = useStore()

function toggleDrawer() {
  store.toggleDrawer()
}
</script>

<template>
  <v-app-bar class="bg-img" :order="2">
    <template #prepend>
      <v-app-bar-nav-icon @click="toggleDrawer" />
    </template>

    <!-- <v-app-bar-title>Application Bar</v-app-bar-title> -->
  </v-app-bar>
</template>

<style scoped>
.bg-img {
background-image:  url('https://img.freepik.com/free-vector/hand-drawn-delicious-food-background_52683-16136.jpg?w=1480&t=st=1711775787~exp=1711776387~hmac=e2896533071254aacec0d1ad45ff7140a3f40bba949d8faf2079a647be954a49') !important;

background-position: center;
background-repeat: no-repeat;
}
</style>
