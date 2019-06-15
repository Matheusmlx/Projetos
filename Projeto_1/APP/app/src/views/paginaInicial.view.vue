<template>

  <v-content class="pa-0">
    <v-container grid-list-xl>
      <v-layout row wrap align-space-around>
        <v-flex xs12 sm6 md6 lg4 v-for="item in aeronave" :key="item._id">
          <v-card color hover @click="getId(item._id)">
            <v-img :src="item.fotos[0]">
              <v-flex>
                <h2 class="text-md-center"  >{{item.nome}}</h2>
              </v-flex>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>

</template>

<script>
export default {
  data: () => ({
    aeronave: [],
  }),

  async created() {
    try {
      let res = await this.$http("/aeronave");
      this.aeronave = res.data;
    } catch (error) {
      console.log(error);
    }
    console.log("aeronaves", this.aeronave);
  },

  methods: {
    getId(id) {
      this.$router.push("/sobreaeronave/" + id);
    }
  }
};
</script>

<style>
.v-responsive.v-img {
  height: 180px;
}
h2 {
    color: floralwhite;
    font-weight: 400;
    text-shadow: 0.1em 0.1em 0.2em black
}
</style>