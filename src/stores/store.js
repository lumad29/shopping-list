// store.js
// import { createPinia } from 'pinia'

// const pinia = createPinia()

// export default pinia

// - -

// stores/store.js
import { defineStore } from 'pinia'

export const useStore = defineStore('app', {
  state: () => ({
    isDrawerOpen: false,
  }),
  actions: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen
    },
  },
})
