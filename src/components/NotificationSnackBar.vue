<script setup>
import { useStore } from '@/stores/store'

const store = useStore()
</script>

<template>
  <v-snackbar
    v-model="store.snackBar.showSnackBar"
    :timeout="timeout"
  >
    {{ store.snackBar.message }}
  </v-snackbar>
</template>
