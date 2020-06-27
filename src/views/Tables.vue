<template>
    <v-container fluid pa-0 >
      <v-text-field v-model="searchEmployees" label="Search" class="pa-4" >
      </v-text-field>
      <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="departments"
          label="Select Department"
          dense
        ></v-select>
      </v-col>
      </v-row>
       <!--{{employees}}-->
       <v-data-table
      :headers="employeesHeaders"
      :items="employees"
      :search ="searchEmployees"
      >
        <template v-slot:item.details="{item}">
          <v-btn @click="showDetails(item)" fab icon>
              <v-icon>mdi-eye</v-icon>
            </v-btn>
        </template>
      </v-data-table>
      
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Table',
  data(){
    return{
        pageTitle: "Table page",
        departments : ["QA","STRUCTURAL CALCULATION 2"],
        selectedEmployees : {},
        employees:[],
        employeesHeaders : [
          {text: "Full Name", value: "fullName"},
          {text: "Employee Code ", value: "employeeCode"},
          {text: "Section", value: "section"},
          {text: "Team", value: "team"},
          {text: "Details", value: "details"}
        ],
        searchEmployees : ''
    }
  },
  mounted(){
    this.loadEmployees()
    //this.loadDepartments()
  },
  methods:{
    loadEmployees(){
        let url = "http://hrdapps48:5031/get/staff_basic_info/department/QA"
        axios.get(url).then(res => {
           this.employees = res.data
        })
    },
    showDetails(val){
        this.selectedEmployees = val
    }
    /*
    loadDepartments(){
         let url = "http://hrdapps48:5031/get/department/options"
         axios.get(url).then(res =>{
          this.departments = res.data
          //console.log(res.data)
         })
    }
    */
  }
};
</script>
