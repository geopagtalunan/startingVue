<template>
  <v-app id="inspire">
    <v-navigation-drawer app :clipped="$vuetify.breakpoint.lgAndUp" v-model="mainDrawer">
      <v-list dense>
        <template v-for="(item, i) in items">
            <v-list-item :key="i" :to="item.to">
                <v-list-item-action>
                  <v-icon>{{item.icon}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  {{item.text}}
                </v-list-item-content>
               </v-list-item>
        </template>
        
      </v-list>
    </v-navigation-drawer>
    <v-app-bar 
    elevation="10"
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app 
    dark 
    color="blue darken-3"
    >
    <v-btn @click="mainDrawer = !mainDrawer" fab icon>
      <v-icon > mdi-menu</v-icon>
    </v-btn>
        Application Title
    </v-app-bar>
  <v-main>
        <router-view/>
  </v-main>
  
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      mainDrawer :true,
      items: [
        {icon : "mdi-home", text:"Home", to:"/"},
        {icon : "mdi-account", text:"About", to:"/mark"},
        {icon : "mdi-weight-lifter", text:"Training", to:"/Training"},
        {icon : "mdi-table", text:"Tables", to:"/Tables"},
        {icon : "mdi-home", text:"Rooms Estimation", to:"/roomsestimation"}
        ]
    }
  }
  
};
</script>
