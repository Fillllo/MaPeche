<template>
  <div class="hello">
    <div>
      <button @click="login" v-if="!isAuthenticated">Log in</button>
    </div>
    <div>
      <button @click="logout" v-if="isAuthenticated">Log out</button>
    </div>
    <div>
      <h2>User Profile</h2>
      <pre v-if="isAuthenticated">
        <h1>{{ user }}</h1>
        <img :src='user.picture'>
      </pre>
    </div>
  </div>

</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    const { logout } = useAuth0()
    const { loginWithRedirect, user, isAuthenticated } = useAuth0()

    return {
      login: () => {
        loginWithRedirect()
      },
      user,
      isAuthenticated,
      logout: () => {
        logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
