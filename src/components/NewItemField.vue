<script setup>
import { useShoppingListStore } from '@/stores/shoppingList'

const store = useShoppingListStore()
</script>

<template>
  <v-text-field v-model="store.newItemField" label="Add product" variant="underlined" @keyup.enter="store.addItem">
    <template #append-inner>
      <v-btn title="add product" density="compact" icon="mdi-plus" class="bg-teal-lighten-1" @click="store.addItem" />
    </template>
  </v-text-field>
</template>
