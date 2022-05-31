<template>
    <div class="spotInfos">
        <div>
          <h1>{{ marker[2] }}</h1>
        </div>
        <div class="poissonList" v-for="poisson, index in poissons" :key="index">
          <span>{{ poisson.nom }}&nbsp;</span>
          <span>{{ poisson.taille }}</span>
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
    getPoissons: function () {
      this.poissons = []
      store.dispatch('getMarkerFish', {
        id_point: this.$props.marker[0]
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
}
.poissonList{
  display: flex;
}
</style>
