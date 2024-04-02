<script setup>
import { useShoppingListStore } from '@/stores/shoppingList'

const store = useShoppingListStore()
</script>

<template>
  <v-dialog v-model="store.isSaveListDialog">
    <v-card title="Save Shopping List" class="mx-auto" width="600">
      <v-card-text>
        How would you like to name your list?
        <v-text-field v-model="store.newListName" label="List Name" class="mt-5" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          title="save list" variant="plain"
          density="compact"
          class="lowercase mr-4 mb-2"
          @click="store.cancelNewList"
        >
          <v-icon start>
            mdi-close
          </v-icon>
          Cancel
        </v-btn>
        <v-btn
          title="save list" variant="plain"
          density="compact"
          class="lowercase mr-4 mb-2"
          @click="store.createNewList"
        >
          <v-icon start>
            mdi-content-save
          </v-icon>
          Save List
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
