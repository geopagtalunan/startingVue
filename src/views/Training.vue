<template>
  <v-container>
   
   <!--v-text-field v-model="myName" label="My Name"></v-text-field>
   
   <h1>My reverse name is: {{reversedMyName}}</h1>
   
   <ul v-for="child in children" :key="child">
      <li v-if="child.gender === 'Male'"> {{child.name}} {{child.age}} {{child.gender}} </li>
   </ul-->
   
   <!--span v-if="isTextShow">{{text}}</span>
   <v-btn @click="showText()">Show Text </v-btn-->
   <span>{{val}}</span>
   <br>
   <v-btn small @click="increment()">
      <v-icon>mdi-ChevronDoubleLeft</v-icon>
   </v-btn>
   <v-btn small @click="decrement()">
      <v-icon>mdi-ChevronDoubleright</v-icon>
   </v-btn>

  <v-content>
      <router-view/>
  </v-content>
  </v-container>
</template>

<script>

export default {
  name: 'App',
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
  computed:{
    reversedMyName(){
      return this.myName.split("").reverse().join("")
    }
  },
  mounted(){
    this.increment()
    ///alert(this.val)
  },
  methods: {
      showText(){
        this.showText = !this.isTextShow
      },
      increment(){
        this.val = this.val + 1
      },
      decrement(){
        this.val = this.val - 1
      }
  }
};
</script>
