const express = require('express');
const mysql = require('mysql')

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

app.get()


app.listen(3000, () => {
    console.log('App listening on port 3000');
})