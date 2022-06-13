import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue'
import store from './store'
const app = createApp(App).use(store)

app.use(
  router
)

app.use(
  createAuth0({
    domain: 'christophe-tosello.eu.auth0.com',
    client_id: 'HuMdkZDUo3PRMLVb4NcpPEFfGQGzqIex',
    redirect_uri: window.location.origin
  })
)
app.mount('#app')
