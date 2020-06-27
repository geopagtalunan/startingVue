<template>
    <v-container fluid pa-0>
        
        <h1>{{pageTitle}}</h1>
        <v-row>
                <v-col cols="4">
                    <v-select label = "Select Plan code" :items="codes" v-model="selectedCode"> </v-select>
               </v-col>
               <v-col cols="2">
                   <v-select label ="Select Revision code" :items="revisions" v-model="revisionCode"></v-select>
               </v-col>
               <v-col cols="3" >
                   <v-btn @click="loadData()" block color="green">Load</v-btn>
               </v-col>
               <v-col cols="3" >
                   <v-btn @click="clearData()" block color="blue">Clear</v-btn>
               </v-col>
        </v-row>
        <v-row>
            <v-col v-if= "data.length!=0" cols="12" >
            <v-data-table
            :items ="data"
            :headers ="dataHeanders"
            :loading= "dataLoading"
            >
               
            </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'

export default{
    data(){
        return{
            pageTitle: "Room Estimation",
            baseUrl: "http://hrdapps68/icad/api/rooms",
            plans: [
                {
                    code: "1100102-2019",
                    rev: ["2-0","3-0","4-0"]
                },
                {
                    code: "1100217-2019",
                    rev: ["3-0","5-0"]
                },
                {
                    code: "1120100-2019",
                    rev: ["2-0"]
                }
                
            ],
            selectedCode : "",
            revisionCode : "",
            data : [],
            dataHeanders : [
                {text: "Name", value: "roomsInfo.EnglishName"},
                {text: "Flooring Hinban", value: "FlooringHinban"}
            ],
            dataLoading : false
        }
    },
    computed: {
        codes() {
            return this.plans.map(plan =>{
                return plan.code
            })
        },
        revisions(){
            if(this.selectedCode === ""){
                return []
            }else{
                return this.plans.filter(rec => {  //filter selected plan//
                    return rec.code === this.selectedCode  // check if return data is in array//
                })[0].rev  // return array of revision codes by getting the rev property//
            }
           
        }
    },
    mounted(){
        //this.loadData()
    },
    methods: {
        loadData(){
            this.dataLoading = true
            axios.get(`${this.baseUrl}?ConstructionCode=${this.selectedCode}&PlanNo=${this.revisionCode}`).then(res=>{
                this.data = res.data
                this.dataLoading = false
            })
        },
        clearData(){
            this.data = ""
        }
       
    }

}
</script>