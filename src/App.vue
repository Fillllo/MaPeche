<template>
  <div>
    <nav v-if="$route.name != 'login'">
    <img :src="require('./assets/logo.png')" id="logo"/>
    <span id="logo_title">MAPÊCHE</span>
      <div class="menu">
        <router-link to="/">ACCEUIL</router-link>
        <router-link to="/carte" v-if="isLoggedIn">CARTE</router-link>
      </div>
      <div class="login_home_div">
        <span v-if="isLoggedIn">Bienvenue, {{ updateUserName }}</span>
        <button @click="goToLoginPage" v-if="!isLoggedIn">CONNEXION</button>
        <button @click="logoutUser" v-if="isLoggedIn">DECONNEXION</button>
      </div>
      </nav>
      <router-view/>
  </div>
</template>
<script>
import store from './store/store.js'

export default {
  data: function () {
    return {
    }
  },
  computed: {
    isLoggedIn: function () {
      if (store.state.status === 'loggedin') {
        return true
      } else {
        return false
      }
    },
    updateUserName: function () {
      if (store.state.user.pseudo !== undefined) {
        return store.state.user.pseudo
      } else {
        return ''
      }
    }
  },
  methods: {
    goToLoginPage: function () {
      this.$router.push('/login')
      this.isOnLoginPage = true
    },
    logoutUser: function () {
      console.log(store.state.user)
      store.state.status = 'loggedout'
      this.$router.push('/')
    },
    showUserInfo: function () {
      console.log(store.state.user)
    }
  }
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
html, body{
  overflow: hidden;
}
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 !important;
  overflow: hidden;
}

nav {
  background:   #1e88e5  ;
  height: 10vh;
  display: flex;
}
#logo{
  padding: 5px;
}
#logo_title{
  font-size: 25px;
  margin-top: auto;
  margin-bottom: auto;
  font-weight: 700;
  color: #e3f2fd;
  margin-left: 0.5vw;
}
.menu{
  width: 50vw;
  display: flex;
  font-size: 18px;
  text-decoration: none !important;
  margin-left: 3vw;
}
nav a {
  display: flex;
  margin: auto 0 auto 0;
  padding: 20px;
  font-weight: 600;
  text-decoration: none;
  color: #e3f2fd;

}

nav a.router-link-exact-active {
  font-weight: 700;
  color: #bbdefb;
}
.login_home_div{
  display: flex;
  margin: auto 0 auto auto;
  padding: 20px;
}
.login_home_div span{
  color: white;
  font-weight: 600;
  margin: auto;
  margin-right: 1vw;
}
.login_home_div button {
  margin: auto;
  background: none;
  border: none;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: #0d47a1;
}
button, input {
  font-family: 'Open Sans', sans-serif;
}
</style>
