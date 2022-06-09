<template>
    <div class="spotInfos">
        <div>
          <h1>{{ marker[2] }}</h1>
        </div>
        <div class="poissonList">
          <div class="poissonInfos" v-for="poisson, index in poissons" :key="index">
            <span id="index">Poisson {{ index + 1 }}</span>
            <div>
              <span><strong>{{ poisson.nom }}</strong> de {{ poisson.taille }} cm</span>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import store from '../store/store.js'
export default {
  setup () {

  },
  props: [
    'marker'
  ],
  data () {
    return {
      poissons: []
    }
  },
  methods: {
    getPoissons: function (marker) {
      this.poissons = []
      let curMark
      console.log(this.$props.marker)
      if (marker == null) {
        curMark = this.$props.marker[0]
      } else {
        curMark = marker[0]
      }
      store.dispatch('getMarkerFish', {
        id_point: curMark
      })
        .then((response) => {
          response.data.result.forEach((poisson) => {
            this.poissons.push(poisson)
          })
        })
    }
  },
  mounted: function () {
    this.getPoissons()
  }
}
</script>

<style scoped>
.spotInfos{
  display: flex;
  flex-direction: column;
  margin-left: 1vw;
}
h1{
  border-bottom: 1px solid #37474f ;
  width: 20vw;
  word-wrap: break-word;
}
.poissonList  {
  display: flex;
  flex-direction: column;
}
.poissonInfos{
  display: flex;
  flex-direction: column;
  margin-bottom: 1vh;
  border-bottom: 1px solid #37474f;
  width: 15vw;
}
.poissonInfos #index{
  font-size: 15px;
  width: 5vw;
}
.poissonInfos div {
  display: flex;
  flex-direction: row;
}
.poissonInfos div span{
  font-size: 20px;
}
</style>
