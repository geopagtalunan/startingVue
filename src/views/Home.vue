<template>
  <div class="home">
      <v-alert dense type="info" >
          I'm a dense alert with a <strong>type</strong> of info
      </v-alert>
    <v-alert
      v-model="alert"
      dismissible
      close-icon="mdi-delete"
      color="cyan"
      border="left"
      elevation="2"
      colored-border
      icon="mdi-twitter"
    >
      You've got <strong>5</strong> new updates on your timeline!.
    </v-alert>
    <v-card class="mx-auto" max-width="344" outlined dark>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text>Button</v-btn>
      <v-btn text>Button</v-btn>
    </v-card-actions>
  </v-card>
  <!--v-list v-for="child in children" :key="child">
    <v-list-item>{{child}}
    </v-list-item>

  </v-list-->
  <div
  class="v-menu__content"
  role="menu"
>
  <div class="v-list" v-for="child in children" :key="child">
    <div
      class="v-list-item"
      role="menuitem"
      tabindex="0"
    >
      {{child.name}}
    </div>
   
  </div>
</div>
  </div>
  
</template>

<script>
export default {
  name: 'Home',
 data(){
    return{
      val: 0,
      text: "Showing Value of Text",
      isTextShow: false,
       myName: "",
      children: [
        {name: "John Doe", age:"37", gender: "Male"},
        {name: "Jane Doe", age:"17", gender: "Female"},
        {name: "Dexter Doe", age:"25", gender: "Male"}
      ]

    }
  },
  
  
}
</script>
