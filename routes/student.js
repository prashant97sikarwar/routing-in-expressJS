const route = require("express").Router()

let students = [{name:"shivani", college:"DTU", year:"I"},
{name:"sakshi", college:"JSSATEN", year:"II"},
{name:"saksham", college:"NSUIT", year:"III"},
{name:"priyam", college:"IIIT", year:"IV"}
]

route.get('/', (req,res) => res.send(students))
route.get('/add', (req,res) => {
    students.push({
        name: req.query.name,
        subject : req.query.subject
    })
    res.send(students)
})

route.get('/:id',(req,res) => res.send(students[req.params.id]))


module.exports = route