<script setup>
import AppBar from '@/components/AppBar.vue'
import AppDrawer from '@/components/AppDrawer.vue'
import AppFooter from '@/components/AppFooter'
</script>

<template>
  <v-app>
    <v-main>
      <AppBar />
      <AppDrawer />
      <MainList />
      <AppFooter />
    </v-main>
  </v-app>
</template>
