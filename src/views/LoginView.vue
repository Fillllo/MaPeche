<template>
    <div class="card">
        <h1 class="card_title" v-if="mode == 'login'">Connexion</h1>
        <h1 class="card_title" v-if="mode == 'create'">Inscription</h1>
        <p class="card_subtitle" v-if="mode == 'login'">Tu n'as pas encore de compte ? <span class="switch" @click="switchToCreateAccount">Inscrit toi !</span></p>
        <p class="card_subtitle" v-else>Tu as déja un compte ? <span class="switch" @click="switchToLogin">Connectes toi !</span></p>
        <div class="input_div">
            <input v-model="nom" class="form_input" type="text" placeholder="Nom" v-if="mode == 'create'" required>
            <input v-model="prenom" class="form_input" type="text" placeholder="Prénom" v-if="mode == 'create'">
            <input v-model="pseudo" class="form_input" type="text" placeholder="Pseudo" v-if="mode == 'create'">
            <input v-model="mail" class="form_input" type="email" placeholder="Adresse mail">
            <input v-model="mdp" class="form_input" type="password" placeholder="Mot de passe" id="password">
            <input type="checkbox" @click="showPassword">Voir le mot de passe
            <button class="button button--disabled" v-if="mode == 'login'" @click="loginAccount">
            <span v-if="getStatus === 'loading'">Connexion en cours...</span>
            <span v-else>Connexion</span>
            </button>
            <button class="button" :class="{'button--disabled' : !validatedFields}" v-else @click="createAccount">Inscription</button>
        </div>
    </div>
</template>
<script>
import store from '../store/store.js'

// eslint-disable-next-line
const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{12,})')
export default {
  name: 'LoginView',
  data: function () {
    return {
      mode: 'login',
      nom: '',
      prenom: '',
      pseudo: '',
      mail: '',
      mdp: '',
      status: ''
    }
  },
  computed: {
    validatedFields: function () {
      if (this.mode === 'create') {
        if (this.mail !== '' && this.nom !== '' && this.prenom !== '' && this.mail !== '' && this.mdp !== '') {
          return true
        } else {
          return false
        }
      } else {
        if (this.mail !== '' && this.mdp !== '') {
          return true
        } else {
          return false
        }
      }
    },
    getStatus: function () {
      if (store.state.status === 'loading') {
        return 'loading'
      } else if (store.state.status === 'loggedin') {
        this.goToHomePage()
        return 'loggedin'
      } else {
        return 'error'
      }
    }
  },
  methods: {
    setAuthenticated: function () {
      this.isAuthenticated = true
    },
    switchToCreateAccount: function () {
      this.mode = 'create'
    },
    switchToLogin: function () {
      this.mode = 'login'
    },
    loginAccount: function () {
      if (this.mail !== '' && this.mdp !== '') {
        if (strongRegex.test(this.mdp)) {
          store.dispatch('login', {
            mail: this.mail,
            mdp: this.mdp
          }).then(function (response) {
            console.log(response.request.response)
            console.log(store.state.status)
          }, function (error) {
            console.log(error)
          })
        }
      }
    },
    createAccount: function () {
      console.log(hashMDP(this.mdp))
      if (this.pseudo !== '' && this.nom !== '' && this.prenom !== '' && this.mail !== '' && this.mdp !== '') {
        if (strongRegex.test(this.mdp)) {
          store.dispatch('createAccount', {
            prenom: this.prenom,
            nom: this.nom,
            pseudo: this.pseudo,
            mail: this.mail,
            mdp: this.mdp
          }).then(function (response) {
            console.log(response)
          }, function (error) {
            console.log(error)
          })
        }
        this.mode = 'login'
      }
    },
    showPassword: function () {
      const x = document.getElementById('password')
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    },
    goToHomePage: function () {
      this.$router.push('/')
    }

  }
}
async function hashMDP (message) {
  const encoder = new TextEncoder()
  const data = encoder.encode(message)
  const hash = await crypto.subtle.digest('SHA-256', data)
  console.log(Array.from(new Uint8Array(hash)))
  return hash
}
</script>
<style scoped>
div{
    height: 90vh;
    font-family: 'Open Sans', sans-serif;
}
.card{
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: fit-content;
    margin: auto;
    text-align: center;
    justify-content: center;
    background-color:   #e5e5e5  ;
    padding: 3vw;
    border-radius: 5px;
    height: 70vh;
    margin-top: 5vh;
}
.switch{
    text-decoration: underline;
    cursor: pointer;
}
.input_div{
    display: flex;
    flex-direction: column;
    align-items: center;
}
input, button{
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-content: center;
    background:  #c6c6c6 ;
}
button {
  border: none;
  font-size: 20px;
  width: 15vw;
  border-radius: 5px;

}
input {
  font-size: 15px;
  width: 20vw;
  border-radius: 5px;
  border: none;
  color: black;
}
</style>
