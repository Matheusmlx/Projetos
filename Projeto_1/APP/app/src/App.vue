<template>
<!-- teste homolog -->
  <v-app class="grey lighten-4">
      <Navbar/>
      <v-content>
        <router-view></router-view>
      </v-content>
      <Footer/>
  </v-app>
</template>

<script>

import Footer from './components/paginaInicial/footer.component.vue'
import Navbar from './components/paginaInicial/navbar.component.vue'
export default {
  name: 'App',
  components: {
    Navbar,Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
