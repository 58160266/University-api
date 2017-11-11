
// reqire('express') = function(){
//     //การยก function มาใส่ในตัวแปล
// }

const express = require('express')//การใช้package
const bodyParser = require('body-parser')
const app = express() //การสั่ง express() มาทำงานคือการสร้างapp

app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

let students = [
    {id: 1,name:'PANUMAS',email:'you@go.buu.ac.th'},
    {id: 2,name:'NATTANICH',email:'mook@go.buu.ac.th'}
]

app.get('/students',(req,res) =>{
    res.json(students)
})

app.post('/students',(req,res)=>{
    let student = req.body //ตัวที่รับค่ามา
    students.push(student)
    res.json(student)    
})


//method get
//json = javascript object
//res = response
app.get('/greeting',(req,res)=>{
    //ส่วนของการทำงาน
    res.json({message:'Hello!'})
})





//ประกาศว่า อันนี้เป็น module หนึ่งให้คนเรียกใช้ได้
module.exports = app