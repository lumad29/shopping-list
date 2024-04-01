<script setup>
import { useStore } from '@/stores/store'
import { useShoppingListStore } from '@/stores/shoppingList'

const shoppingListStore = useShoppingListStore()
const store = useStore()

const items = [
  {
    title: 'Item #2',
    value: 2,
    props: {
      prependIcon: 'mdi-list-box',
    },
  },
  {
    title: 'Item #3',
    value: 3,
    props: {
      prependIcon: 'mdi-list-box',
    },
  },
]
</script>

<template>
  <v-navigation-drawer
    v-model="store.isDrawerOpen"
    permanent
    order="2"
  >
    <div class="text-overline px-6 pt-3">
      Saved Lists
    </div>
    <v-list>
      <v-list-item v-for="(item, index) in shoppingListStore.savedLists" :key="item.listName">
        <v-list-item-title> {{ item.listName }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
