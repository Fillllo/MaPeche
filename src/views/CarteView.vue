<template>
  <div>
    <l-map
        v-if="showMap"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        :style="{height: '90vh', width: width + 'vw'}"
        @click="addMarker"
      >
        <l-tile-layer
          :url="url"
          :attribution="attribution"
        />
        <l-marker v-for="marker, index in markers" :lat-lng="marker[1]" @click="showCompo(marker)" :key="index"></l-marker>
        <l-marker v-if="isCreating" :lat-lng="newLatLng" @click="showCompo(marker)"></l-marker>
        <MarkerInfo class="compo" v-if="showCompoMarker" :marker="openedMarker" :mode="mode">fdssfssff</MarkerInfo>
    </l-map>
    <div id="info" :style="{width: 100-width + 'vw'}">
      <img :src="require('../assets/close.png')" v-if="showCompoMarker || showCreatorMarker" @click="closeCompo()"/>
      <MarkerInfo class="compo" v-if="showCompoMarker" :marker="openedMarker"></MarkerInfo>
      <MarkerCreator class="compo" v-if="showCreatorMarker" :coords="creatorCoords" :lat="newLat" :lng="newLng"></MarkerCreator>
    </div>
  </div>
</template>

<script>
// DON'T load Leaflet components here!
// Its CSS is needed though, if not imported elsewhere in your application.
import store from '../store/store.js'
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'
import { latLng } from 'leaflet'
import MarkerInfo from '../components/MarkerInfo.vue'
import MarkerCreator from '../components/MarkerCreator.vue'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    MarkerInfo,
    MarkerCreator
  },
  data () {
    return {
      zoom: 13,
      width: 100,
      center: latLng(47.41322, -1.219482),
      url: 'https://tile.jawg.io/56409daf-4f05-4a48-ac51-71111498ebfb/{z}/{x}/{y}{r}.png?access-token=Cz7HXJ00PURg50N9raXEiBH0H26MzMJ3XbxIKPGqH3JiT7qphNK2FkdjG1joiXfD',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true,
      markers: [],
      openedMarker: [],
      showCompoMarker: false,
      showCreatorMarker: false,
      creatorCoords: '',
      isCreating: false,
      newLat: '',
      newLng: '',
      newLatLng: ''
    }
  },
  methods: {
    zoomUpdate (zoom) {
      this.currentZoom = zoom
    },
    centerUpdate (center) {
      this.currentCenter = center
    },
    addMarker (event) {
      if (event.originalEvent != null && !this.isCreating) {
        this.isCreating = true
        console.log(event)
        this.showCreatorMarker = true
        this.showCompoMarker = false
        this.width = 75
        this.newLat = event.latlng.lat
        this.newLng = event.latlng.lng
        this.newLatLng = latLng(this.newLat, this.newLng)
        // this.markers.push([latLng(event.latlng.lat, event.latlng.lng), 'test'])
      }
    },
    getMarkers () {
      this.center = latLng(47.41322, -1.219482)
      store.dispatch('getMarkers', {
        id_compte: store.state.user.id_compte
      })
        .then((response) => {
          console.log(response.data.result)
          response.data.result.forEach((marker) => {
            this.markers.push([marker.id_point, latLng(marker.lat, marker.lng), marker.nom])
          })
        })
    },
    showCompo: function (marker) {
      this.mode = 'consult'
      this.showCompoMarker = true
      this.showCreatorMarker = false
      this.width = 75
      this.openedMarker = marker
      console.log(marker)
    },
    closeCompo: function () {
      this.showCompoMarker = false
      if (this.isCreating) {
        this.isCreating = false
      }
      this.width = 100
    }
  },
  mounted: function () {
    this.getMarkers()
  },
  async beforeMount () {
  }
}
</script>
<style scoped>
div{
  display: flex;
}
.compo{
  color:    #37474f  ;
}
#info{
  display: flex;
  flex-direction: column;
  background:     #e3f2fd    ;
  overflow-y: hidden;
}
#info img {
  width: 25px;
  height: 25px;
  padding: 10px;
}
l-map{
}
</style>
