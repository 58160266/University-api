
const test = require('tape')
const request = require('supertest')
const app = require('../server') // ออกไปที่  level เดียวกันกับ server

test('First test case', (t)=>{
    t.equal(1,1)
    t.end()
})


// test HTTP status code ต้องกับที่คาดหวังไหม
//Action resources
test('GET /students',(t)=>{
    // open Browser  //domain of api ที่จะรียก // /students = resources
    request(app).get('/students')     
        .expect(200) // HTTP status code 
        // close connection
        .then((res) => {
            //เก็บค่าใส่ตัวแปล
            let students = res.body
            //สมมุติว่าค่ามี 2 คน
            t.equal(2,students.length)
            //เอาค่า นักเรียนที่ 1 มาลอง // ที่อยู่ใน students list  
            let student = students[0]
            //คาดหวังว่า ค่า id จะไม่ undefined
            //fn นี้ ต้องการ parameter 2 ตัว
            // ค่าที่ต้องการ , ค่าที่ได้มา 
            t.notEqual(undefined,student.id) // คาดหวังค่า true
            t.end()
        }) 
})

test('POST /student',(t) => {
    request(app).post('/students')
        .send({name:'Yoei',email:'yoeiei@gumail.com'})
        .expect(200)
        .then((res)=>{
            let student = res.body
            // t.notEqual(undefined,student.id)
            t.equal('Yoei',student.name)
            t.end()
        })
})  