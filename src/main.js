import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue'
const app = createApp(App)

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
