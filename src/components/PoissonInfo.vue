<template>
    <div id="poissonInfo">
        <span>Poisson {{ index }}</span>
        <div>
            <input type="text" v-model="nom" placeholder="Nom" @change="emitCurrStateToParent ()">
            <input type="number" v-model="taille" placeholder="Taille" @change="emitCurrStateToParent ()">
        </div>
    </div>
</template>
<script>
export default {
  setup () {
  },
  data () {
    return {
      nom: '',
      taille: '',
      poisson: []
    }
  },
  props: [
    'index'
  ],
  methods: {
    emitCurrStateToParent () {
      this.poisson.splice(0, 1, this.nom)
      this.poisson.splice(1, 1, this.taille)
      this.$emit('emitCurrStateToParent', this.poisson)
    }
  }
}
</script>

<style scoped>
#poissonInfo{
    border-bottom: 1px solid #37474f;
    width: 20vw;
    margin-left: 1vw;
}
span{
    font-size: 15px;
    font-weight: 500;
}
input{
  font-family: 'Open Sans', sans-serif;
  background: #bbdefb;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  width: 8vw;
  padding: 3%;
  margin: 0.3vw;
}
</style>
