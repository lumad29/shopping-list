<script setup>
import { useShoppingListStore } from '@/stores/shoppingList'

const store = useShoppingListStore()
</script>

<template>
  <div class="py-4">
    <div class="text-h6 font-weight-light">
      Shopping List
    </div>
    <v-chip v-if="store.shoppingListItems.length">
      {{ store.shoppingListItems.length }}  {{ store.shoppingListItems.length < 2 ? 'item' : 'items' }} added
    </v-chip>
    {{ store.savedLists }}
  </div>
</template>
