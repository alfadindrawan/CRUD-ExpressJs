const express = require('express');
const connection = require('./database')
const app = express();

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Stark009',
//     database: 'list_app'
// })

// connection.connect((err) => {
//     if(err){
//         console.log('error connecting: ' + err.stack);
//         return;
//     }
//     console.log('success');
// })



// app.get('/', (req, res) => {
//   connection.query(
//       'SELECT *FROM items',
//       (error, results) => {
//           console.log(results);
//           res.render('hello.ejs');
//       }
//   );
// });

// app.listen(3000);

app.get('/', (req,res) => {
    connection.query(
        'SELECT *FROM items',
            (err, results) => {
            if(err) throw err
            res.send(results)
        }
    );
});




module.exports = app