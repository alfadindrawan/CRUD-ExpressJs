const express = require('express');
const connection = require('./database')
const app = express();

app.use
connection.connect((err) => {
    if(err){
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('success');
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


