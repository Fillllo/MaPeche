<template>
  <div>
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/about">Carte</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 !important;
}

nav {
  background: #2c3e50;
  height: auto;
}

nav a {
  font-weight: bold;
  padding: 30px;
  color: blue;

}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
