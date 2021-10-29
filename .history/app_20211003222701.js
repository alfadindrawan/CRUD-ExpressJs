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

app.get('/index',(req, res) => {
    connection.query(
        'SELECT *FROM items',
        (error, results) => {
            res.render('index.ejs', {items: results})
        }
    )
})

app.get('/new', (req, res)) => {
    
}

app.get('/', (req, res) => {
  connection.query(
      'SELECT *FROM items',
      (error, results) => {
          console.log(results);
          res.render('top.ejs');
      }
  );
});


app.listen(3000);


