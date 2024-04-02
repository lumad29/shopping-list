<script setup>
import { useShoppingListStore } from '@/stores/shoppingList'

const store = useShoppingListStore()
</script>

<template>
  <v-card v-if="store.shoppingListItems.length" class="pa-1 pl-8 d-flex align-center justify-end" flat>
    <v-btn
      title="save list" variant="plain"
      density="compact"
      class="lowercase"
      @click="store.saveList"
    >
      <v-icon start>
        mdi-content-save
      </v-icon>
      Save List
    </v-btn>
    <div>
      <v-btn
        title="remove all products" variant="plain"
        density="compact"
        class="lowercase ml-4 pr-8"
        @click="store.removeAllshoppingListItems"
      >
        <v-icon start>
          mdi-trash-can
        </v-icon>
        Remove all
      </v-btn>
    </div>

    <v-checkbox title="mark all products as purchased" density="compact" variant="plain" class="d-flex" @click="store.toggleAllshoppingListItems" />
  </v-card>
</template>
