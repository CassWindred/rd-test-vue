import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const store = createStore({
    state () {
      return {
        menuItems: [
            ["Home", "/"],
            ["What we do", "/about"],
            ["The digital divide", "/digitaldivide"],
            ["Get involved", "/getinvolved"],
        ]
      }
    },
    mutations: {
    }
  })

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
