const mysql = require('mysql')


const constructor = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Stark009',
    database: 'list_app'
})