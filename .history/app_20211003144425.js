const express = require('express');
const connection = require('./database')
const app = express();

app.use(express.static('public'));
connection.connect((err) => {
    if(err){
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('success');
})


app.get('/top', (req, res) => {
    res.render('top.ejs')
})

app.get('/index',(req, res) => {
    
})

app.get('/', (req, res) => {
  connection.query(
      'SELECT *FROM items',
      (error, results) => {
          console.log(results);
          res.render('hello.ejs');
      }
  );
});

app.listen(3000);


