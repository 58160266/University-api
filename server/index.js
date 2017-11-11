const express = require('express')//การใช้package
const app = express() //การสั่ง express() มาทำงานคือการสร้างapp

let students = [
    {id: 1,name:'PANUMAS',email:'you@go.buu.ac.th'},
    {id: 2,name:'NATTANICH',email:'mook@go.buu.ac.th'}
]


// reqire('express') = function(){
//     //การยก function มาใส่ในตัวแปล
// }


//method get
//json = javascript object
//res = response
app.get('/greeting',(req,res)=>{
    //ส่วนของการทำงาน
    res.json({message:'Hello!'})
})



//ประกาศว่า อันนี้เป็น module หนึ่งให้คนเรียกใช้ได้
module.exports = app