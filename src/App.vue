<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import { defineComponent } from 'vue'
import EmptyLayout from '@/components/layouts/EmptyLayout.vue'
import MainLayout from '@/components/layouts/MainLayout.vue'
import AppLayout from '@/components/layouts/AppLayout.vue'

export default defineComponent({
  name: 'BPlan.app',
  components: {
    EmptyLayout,
    MainLayout,
    AppLayout
  },
  mounted() {

    let bootstrap = document.createElement('script');
    bootstrap.setAttribute('src', '/assets/vendors/bootstrap/bootstrap.min.js');
    document.body.appendChild(bootstrap);

    let anchorjs = document.createElement('script');
    anchorjs.setAttribute('src', '/assets/vendors/anchorjs/anchor.min.js');
    document.body.appendChild(anchorjs);

    let is = document.createElement('script');
    is.setAttribute('src', '/assets/vendors/is/is.min.js');
    document.body.appendChild(is);

    let fontawesome = document.createElement('script');
    fontawesome.setAttribute('src', '/assets/vendors/fontawesome/all.min.js');
    document.body.appendChild(fontawesome);

    let lodash = document.createElement('script');
    lodash.setAttribute('src', '/assets/vendors/lodash/lodash.min.js');
    document.body.appendChild(lodash);

    let listjs = document.createElement('script');
    listjs.setAttribute('src', '/assets/vendors/list.js/list.min.js');
    document.body.appendChild(listjs);

    let feather_icons = document.createElement('script');
    feather_icons.setAttribute('src', '/assets/vendors/feather-icons/feather.min.js');
    document.body.appendChild(feather_icons);

    let dayjs = document.createElement('script');
    dayjs.setAttribute('src', '/assets/vendors/dayjs/dayjs.min.js');
    document.body.appendChild(feather_icons);

    // let phoenix = document.createElement('script');
    // phoenix.setAttribute('src', '/assets/js/phoenix.js');
    // document.body.appendChild(phoenix);

    let echarts = document.createElement('script');
    echarts.setAttribute('src', '/assets/vendors/echarts/echarts.min.js');
    document.body.appendChild(echarts);

    let leaflet = document.createElement('script');
    leaflet.setAttribute('src', '/assets/vendors/leaflet/leaflet.js');
    document.body.appendChild(leaflet);

    // let leafletMarkercluster = document.createElement('script');
    // leafletMarkercluster.setAttribute('src', '/assets/vendors/leaflet.markercluster/leaflet.markercluster.js');
    // document.body.appendChild(leafletMarkercluster);

    // let leafletTilelayerColorfilter = document.createElement('script');
    // leafletTilelayerColorfilter.setAttribute('src', '/assets/vendors/leaflet.tilelayer.colorfilter/leaflet-tilelayer-colorfilter.min.js');
    // document.body.appendChild(leafletTilelayerColorfilter);


  },
  computed: {
    layout() {
      console.log(this.$route.meta.layout || 'empty') + '-layout';
      return (this.$route.meta.layout || 'empty') + '-layout';
    }
  }
})
</script>

<style lang="scss">

</style>