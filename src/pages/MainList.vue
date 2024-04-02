<script setup>
import ListActionButtons from '../components/ListActionButtons.vue'
import { useShoppingListStore } from '@/stores/shoppingList'
import ShoppingListTitle from '@/components/ShoppingListTitle'
import NewItemField from '@/components/NewItemField'
import ShoppingList from '@/components/ShoppingList'
import ListWapper from '@/components/ListWrapper'

const store = useShoppingListStore()
</script>

<template>
  <v-container class="fill-height d-flex flex-column">
    <ShoppingListTitle />
    <ListWapper>
      <NewItemField />
      <ListActionButtons />
      <ShoppingList :items="store.shoppingListItems" @remove-items="store.removeShoppingListItem" @toggle-check="store.toggleCheck" />
    </ListWapper>
  </v-container>
</template>
