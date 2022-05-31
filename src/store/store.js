import { createStore } from 'vuex'
import 'es6-promise/auto'
const axios = require('axios')
const instance = axios.create({
  baseURL: 'http://localhost:8000'
})
const store = createStore({
  state: {
    status: '',
    user: {
      id_compte: -1,
      pseudo: '',
      nom: '',
      prenom: '',
      markers: '',
      poissons: ''
    }
  },
  mutations: {
    setStatus: function (state, status) {
      state.status = status
    },
    logUser: function (state, user) {
      state.user.id_compte = user.id_compte
      state.user.pseudo = user.pseudo
      state.user.nom = user.nom
      state.user.prenom = user.prenom
    },
    setMarkers: function (state, markers) {
      state.user.markers = markers
    },
    setPoissons: function (state, poissons) {
      state.user.poissons = poissons
    }
  },
  actions: {
    login: ({ commit }, userInfos) => {
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line
        commit('setStatus', 'loading');
        instance.post('/comptes/_get', userInfos)
          .then(function (response) {
            commit('setStatus', 'loggedin')
            commit('logUser', response.data.result[0])
            console.log(response.data.result[0])
            resolve(response)
          })
          .catch(function (error) {
            commit('setStatus', 'error')
            reject(error)
          })
      })
    },
    createAccount: ({ commit }, userInfos) => {
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line
        commit;
        instance.post('/comptes/_create', userInfos)
          .then(function (response) {
            commit('setStatus', 'created')
            resolve(response)
          })
          .catch(function (error) {
            commit('setStatus', 'errorCreate')
            reject(error)
          })
      })
    },
    getMarkers: ({ commit }, userId) => {
      return new Promise((resolve, reject) => {
        instance.post('/points/_getMarkers', userId)
          .then(function (response) {
            commit('setMarkers', response.data.result[0])
            console.log(userId)
            resolve(response)
            console.log('test')
          })
          .catch(function (error) {
            reject(error)
          })
      })
    },
    getMarkerFish: ({ commit }, spotId) => {
      return new Promise((resolve, reject) => {
        instance.post('/prises/_getMarkerFish', spotId)
          .then(function (response) {
            commit('setPoissons', response.data.result[0])
            resolve(response)
          })
          .catch(function (error) {
            reject(error)
          })
      })
    },
    createSpot: ({ commit }, spotInfos) => {
      return new Promise((resolve, reject) => {
        instance.post('/points/_createMarker', spotInfos)
          .then(function (response) {
            resolve(response)
          })
          .catch(function (error) {
            reject(error)
          })
      })
    }
  },
  getters: {
    getUser (state) {
      return state.user
    }
  }
})

export default store
