const express = require('express');
const connection = require('./database')
const app = express();

app.use(express.urlencoded({extended: false}));
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
});

app.post('/create', (req, res) => {
    connection.query(
        'INSERT INTO items (name) VALUES (?)',
        [req.body.itemName],
        (error, results) => {
            res.redirect('/index')
        }
    )
});

app.get('/new', (req, res) => {
    res.render('new.ejs')
});

app.get('/', (req, res) => {
  connection.query(
      'SELECT *FROM items',
      (error, results) => {
          console.log(results);
          res.render('top.ejs');
      }
  );
});

app.post('/delete/:id', (req, res) => {
    let del = 'DELETE FROM items WHERE id= ?'
    connection.query(
        dell,
        [req.params.id]
    )
    res.redirect('/index')
})


app.listen(3000);


