<template>
    <nav>
    <v-navigation-drawer v-model="drawer" dark app >
      <!-- CRIANDO UM FOR PARA GERAR A LISTA DE MENU -->
      <v-list>
        <template v-for="item in links">
          <v-layout v-if="item.heading" :key="item.heading" row align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{item.heading}}</v-subheader>
            </v-flex>
          </v-layout>

          <v-list-tile v-else :key="item.text" router :to="item.route" @click.prevent="drawer = drawer">
            <v-list-tile-action>
              <v-icon color="orange">{{ item.icon }}</v-icon>
             </v-list-tile-action>
              <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
      <!-- BARRA DE NAVEGAÇÃO -->
    </v-navigation-drawer>
    <v-toolbar color="blue" app>
      <v-toolbar-side-icon @click.prevent="drawer = !drawer">
        <v-icon color="gray">more_vert</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase">
        <router-link
        to='/'
        tag='span'
        style='cursor: pointer'>
        <span class="font-weight-light white--text">Gerenciador de Tarefas</span>
        
        </router-link>
       
      </v-toolbar-title>
       
    </v-toolbar>

      <!-- 
      NESTE CAMPO INSERIR SLIDE COM IMAGENS DO ESQUADRÃO
      -->
 

   
  </nav>
</template>

<script>
export default {
    data: () => ({
        login:"http://localhost:8080/login",
        registro:"http://localhost:8080/register",
    drawer: true ,
    links: [
      { icon: "home", text: "Página Inicial", route: "/" },
      { icon: "people", text: "Pelicanos", route: "/selectpelicano" },
      { icon: "collections", text: "Aeronaves", route: "/aeronave" },
      { icon: "history", text: "História", route: "/nossahistoria" },
      { icon: "label_important", text: "O Esquadrão", route: "/esquadrao" },
      { icon: "check_box", text: "Missões", route: "/missoes" },
      { icon: "airport_shuttle", text: "Intercâmbios", route: "intercambio" },
      { icon: "airport_shuttle", text: "Login", route: "/login" }
    ]
  })
};

</script>
