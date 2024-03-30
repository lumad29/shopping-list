/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { createApp } from 'vue'
import AppBar from '../src/components/AppBar.vue'
import App from './App.vue'
import { registerPlugins } from '@/plugins'

// Components

// Composables

const app = createApp(App)
app.component('app-bar', AppBar)
registerPlugins(app)

app.mount('#app')
