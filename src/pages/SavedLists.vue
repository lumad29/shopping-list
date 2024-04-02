<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import { useShoppingListStore } from '@/stores/shoppingList'
import ShoppingListTitle from '@/components/ShoppingListTitle'
import NewItemField from '@/components/NewItemField'

const store = useShoppingListStore()
const { smAndDown } = useDisplay()
</script>

<template>
  <v-container class="fill-height d-flex flex-column">
    <ShoppingListTitle />
    <NewItemField />
    <v-row justify="space-evenly d-flex w-100">
      <v-col :cols="smAndDown ? 12 : 6">
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

        <div v-for="(item, index) in store.shoppingListItems" :key="index">
          <div class="my-2">
            <v-card class="bg-teal-lighten-2 pa-1 pl-8 d-flex align-center">
              <div class="spacer d-flex align-center" :class="{ 'item-checked': item.isChecked }">
                {{ item.title }}
                <v-divider v-if="item.isChecked" :thickness="2" color="white" class="border-opacity-75" />
              </div>

              <div>
                <v-btn
                  title="remove product" variant="plain" icon="mdi-trash-can" density="compact"
                  class="lowercase ml-4 pr-8" @click="store.removeShoppingListItem(index)"
                />
              </div>
              <v-checkbox v-model="item.isChecked" title="mark product as purchased" density="compact" variant="plain" class="d-flex" />
            </v-card>
          </div>
        </div>

        <div class="py-14" />
        <!-- </v-responsive> -->
      </v-col>
    </v-row>
  </v-container>
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

<style scoped>
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
