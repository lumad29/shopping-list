/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { createApp } from 'vue'
// component
import App from './App.vue'

import { registerPlugins } from '@/plugins'

// Composables

const app = createApp(App)
// app.component('app-bar', AppBar)
registerPlugins(app)
app.mount('#app')
