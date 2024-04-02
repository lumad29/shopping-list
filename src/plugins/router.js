import { createRouter, createWebHistory } from 'vue-router'

import MainList from '@/pages/MainList.vue'

import SavedLists from '@/pages/SavedLists.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MainList },
    { path: '/savedlists', component: SavedLists },
  ],
})

export default router
