<template>
    <div class="creator">
        <div id="spotInfos">
          <span>Ajouter un nouveau spot</span>
          <div id="createSpot">
            <input v-model="nom" placeholder="Nom du spot">
            <button @click="createSpot">Créer</button>
          </div>
        </div>
        <div id="nombrePoisson">
            <span>Entrez votre nombre de poissons pêchés</span>
            <input type="number" v-model="nbrPoissons" @change="changeTabLength">
        </div>
        <div class="PoissonsList">
            <PoissonInfo v-for="poisson, index in poissons" :key="index" v-on:emitCurrStateToParent="reciveDataFromChild ($event, index)" :index="index">test</PoissonInfo>
        </div>
    </div>
</template>
<script>
import store from '../store/store.js'
import PoissonInfo from './PoissonInfo.vue'
export default {
  setup () {

  },
  components: {
    PoissonInfo
  },
  data () {
    return {
      nom: '',
      id_compte: '',
      nbrPoissons: 0,
      poissons: [],
      test: ''
    }
  },
  props: [
    'lat',
    'lng'
  ],
  methods: {
    reciveDataFromChild (recivedData, index) {
      this.poissons[index] = recivedData
    },
    createSpot: function () {
      this.id_compte = store.state.user.id_compte
      console.log(this.$props.lat, this.$props.lng, this.nom, this.id_compte)
      store.dispatch('createSpot', {
        lat: this.$props.lat,
        lng: this.$props.lng,
        nom: this.nom,
        id_compte: this.id_compte
      }).then(function (response) {
        console.log(response)
      }, function (error) {
        console.log(error)
      })
    },
    changeTabLength: function () {
      this.poissons.length = this.nbrPoissons
    }
  }
}
</script>
<style scoped>
#spotInfos{
  display: flex;
  flex-direction: column;
  width: 20vw;
  margin-left: 1vw;
}
#spotInfos  span{
  font-weight: 700;
  font-size: 30px;
  border-bottom: 1px solid  #37474f;
  margin-bottom: 3vh;
  padding: 0.5vh;
}
input{
  font-family: 'Open Sans', sans-serif;
  background: #bbdefb;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  padding: 3%;
  }
#createSpot{
  display: flex;
  flex-direction: row;
}
#createSpot button{
  background: none;
  border: none;
  background:    #bbdefb   ;
  border-radius: 5px;
  padding: 0.5vw;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  margin-left: 5%;
  width: 5vw;
  color: #e3f2fd;
  transition: 0.5s;
}
#createSpot button:hover{
  background:  #42a5f5 ;
  cursor: pointer;
  transition: 0.5s;
}
.creator {
    display: flex;
    flex-direction: column;
}
#nombrePoisson{
  display: flex;
  flex-direction: column;
  width: 20vw;
  margin-left: 1vw;
  margin-top: 3vh;
}
#nombrePoisson span{
  font-weight: 700;
  font-size: 20px;
  border-bottom: 1px solid  #37474f;
  padding: 0.5vh;
  margin-bottom: 3vh;
}
.PoissonsList{
    display: flex;
    flex-direction: column;
    margin-top: 1vh;
    overflow-y: scroll;
}
</style>
