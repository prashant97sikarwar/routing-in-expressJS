const srv = require("express")()

const teacherRoute = require('./routes/teachers') 
const studentRoute = require('./routes/student')

srv.use('/student', studentRoute)
srv.use('/teachers',teacherRoute)





srv.listen(2233)