<script setup>
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()
</script>

<template>
  <v-row justify="space-evenly d-flex w-100">
    <v-col :cols="smAndDown ? 12 : 6">
      <slot />
    </v-col>
  </v-row>
</template>
