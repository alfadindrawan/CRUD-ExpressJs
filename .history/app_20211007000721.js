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

// app.get('/bio', (req, res) => {
//     res.render('bio.ejs')
// })

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


app.post('/delete/:id', (req, res) => {
    let del = 'DELETE FROM items WHERE id= ?'
    connection.query(
        del,
        [req.params.id],
        (error, result) => {
            res.redirect('/index')
        }
        )
    })
    
    app.get('/', (req, res) => {
      connection.query(
          'SELECT *FROM items',
          (error, results) => {
              console.log(results);
              res.render('top.ejs');
          }
      );
    });

    app.get('/edit/:id', (req, res) => {
        connection.query(
            'SELECT *FROM items WHERE id= ?',
            [req.params.id],
            (error, results) => {
                res.render('edit.ejs', {item: results[0]})
            }
        )
    });

    app.post

app.listen(3000);


