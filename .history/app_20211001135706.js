const express = require('express');
const mysql = require('mysql')

const app = express();

const connection = mysql.createConnection



app.get('/', (req, res) => {
  res.render('hello.ejs');
});



app.listen(3000);