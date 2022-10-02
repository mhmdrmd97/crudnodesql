const mysql = require('mysql2/promise');

exports.db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"mysql123$",
    database:"crud_contact"
})

