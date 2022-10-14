import { createApp, useAttrs, VueElement } from 'vue'
import App from './App.vue'
import './assets/main.css'

import router from './router/router'

const app = createApp(App);
app.use(router);
app.mount('#app')

// createApp(App).mount('#app')

