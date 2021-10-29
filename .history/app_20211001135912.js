const express = require('express');
const mysql = require('mysql')

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Stark009',
    database: 'list_app'
})

connection.connect((err) => {
    if(err){
        console.log('error connecting: ' + err.stack);
        return;
    }
})



app.get('/', (req, res) => {
  res.render('hello.ejs');
});



app.listen(3000);