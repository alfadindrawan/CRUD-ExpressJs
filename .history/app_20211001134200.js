const express = require('express')
const app = express();


app.get('/', (res,req) => {
    res.render('hello.ejs')
})

app.listen(3000);