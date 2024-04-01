// store.js
// import { createPinia } from 'pinia'

// const pinia = createPinia()

// export default pinia

// - -

// stores/store.js
import { defineStore } from 'pinia'
import { useStore } from '@/stores/store'

export const useShoppingListStore = defineStore('shoppingList', {
  state: () => ({
    shoppingListItems: [],
    savedLists: [],
    newItemField: '',
    isSaveListDialog: false,
    newListName: '',
  }),
  actions: {
    addItem() {
      if (this.newItemField.trim() === '')
        return

      this.shoppingListItems.push({
        title: this.newItemField,
        isChecked: false,
      })
      this.newItemField = ''
    },

    removeShoppingListItem(index) {
      this.shoppingListItems.splice(index, 1)
    },

    removeAllshoppingListItems() {
      this.shoppingListItems = []
    },

    toggleAllshoppingListItems() {
      const allshoppingListItemsSelected = this.shoppingListItems.every(item => item.isChecked)
      this.shoppingListItems.forEach((item) => { item.isChecked = !allshoppingListItemsSelected })
    },

    saveList() {
      this.isSaveListDialog = true
    },

    createNewList() {
      const store = useStore()
      const newList = {
        listName: this.newListName,
        shoppingListItems: [...this.shoppingListItems],
      }
      this.savedLists.push(newList)
      this.isSaveListDialog = false
      store.isDrawerOpen = true
    },

    cancelNewList() {
      this.newListName = ''
      this.isSaveListDialog = false
    },
  },
})
