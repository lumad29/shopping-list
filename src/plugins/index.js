/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from './pinia'
import router from '@/plugins/router'

export function registerPlugins(app) {
  app.use(vuetify)
  app.use(pinia)
  app.use(router)
}
