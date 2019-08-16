const express = require('express');
const router = express.Router();
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: 'verse.cqbf6drqxf3o.us-west-1.rds.amazonaws.com',
//     user: 'alpha',
//     password: 'hemingway',
//     database: 'verse'
// });

router.get('/', (req, res, next) => {
    res.send('API is working properly');
    // connection.connect((err) => {
    //    if (err) res.send("ERROR WITH DB: " + err.message);
    //    else res.send("DB connected!"); 
    // });
});

module.exports = router;