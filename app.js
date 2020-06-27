const express = require('express')
const app = express()

app.get('/', function (req, res){
      res.send('hello world')
})


app.get('/api',function (req, res){
  res.send('api routes')
})

app.get('/api12', (req, res)=>{
    res.send('new api routes')
})

app.get('/api/:department', (req,res)=>{
  let dep = req.params.department
  let userId = req.query.id
  console.log(userId)
  res.send(`youre getting ${dep} department api with user Id ${userId}`)
})

app.get('/icad/api/:table', (req,res)=>{
  let table = req.params.table
  let code = req.query.ConstructionCode
  let revCode = req.query.PlanNo

  const knex = require('knex')({
    client : 'sqlite3',
    connection :{
      filename : `./Sample Data/${code}/${code}-${revCode}.db`
    }
  })
  //res.send('icad')
  
  knex
    .select()
    .from(table)
    .then(rows => {
        /*
        let newArray = []
        for(let i = 0; i<rows.length; i++){
          //console.log(rows[i].FloorColor)
          newArray.push(rows[i].FloorColor)
        }
        
        res.send(newArray)
        */
       ///map function//
       /*
       let toSend = rows.map(rec => rec.FloorColor)
       res.send(toSend)
       */
      // select only few data//
      /*
       let toSend = rows.map(rec => {
         return {
           "Floor Product Code" : rec.FlooringProductCode,
           "Ceiling Product Code" : rec.CeilingProductCode,
           "Floor Color" : rec.FloorColor,
           "Ceiling Color" : rec.CeilingColor
         }
       })
       */
      // sum CeilingColor and FloorColor//
      /*
       let toSend = rows.map(rec => {
         return {
           "Floor Product Code" : rec.FlooringProductCode,
           "Ceiling Product Code" : rec.CeilingProductCode,
           "Color Sum" : rec.CeilingColor + rec.FloorColor
         }
       })
       */
      // exclude some data//
      /*
      let toSend = rows.map(rec => {
        delete rec.FloorColor
        delete rec.CeilingColor
        return rec
      })
      */


      ///Filter function///

      //filter all 15,000,000 floorColor and Above//
      let toSend = rows.filter( row => {
        return row.FloorColor > 15000000 
        && row.CeilingProductCode === '0101010'
      }).map(row => {
          return row.RoomId
      })

       res.send(toSend)
      
        //console.log(code,revCode)
    }).catch(err => {
        console.log(err)
        res.send('Something went wrong :(');
    })
})
//exercise//

let myCard = [
  {subject :"Math", grade: 95},
  {subject :"Values", grade: 65},
  {subject :"English", grade: 88},
  {subject :"P.E", grade: 70},
  {subject :"MAPEH", grade: 79}
]
//Get Pass Subjects//
/*
let passSubject = myCard.filter(row =>{
  return row.grade > 75
  
}).map(subj =>{
   return subj.subject
})
*/
/*
//Get Average//
let averageGrade = myCard.map(rec =>{
  return rec.grade
}).reduce((a, b) =>{
  return a+b
},0) / myCard.length


console.log('Answer:', averageGrade)
*/
app.listen(3000, () => {
  console.log("running port at 3000...")
})
