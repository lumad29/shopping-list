<script setup>
import NotificationSnackBar from './components/NotificationSnackBar.vue'
import AppBar from '@/components/AppBar.vue'
import AppDrawer from '@/components/AppDrawer.vue'
import AppFooter from '@/components/AppFooter'
import SaveListDialog from '@/components/SaveListDialog'
</script>

<template>
  <v-app>
    <v-main>
      <AppBar />
      <AppDrawer />
      <RouterView />
      <AppFooter />
      <SaveListDialog />
      <NotificationSnackBar />
    </v-main>
  </v-app>
</template>

<style>
.v-btn.lowercase {
  text-transform: unset;
}
.item-checked {
  text-decoration: line-through;
}
.spacer {
  width: 100%;
}
input.item-checked {
  color: whitesmoke
}
</style>
