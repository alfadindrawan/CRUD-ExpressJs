const express = require('express');
const mysql = require('mysql')

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    
})



app.get('/', (req, res) => {
  res.render('hello.ejs');
});



app.listen(3000);