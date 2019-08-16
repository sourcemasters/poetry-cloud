
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'verse.cqbf6drqxf3o.us-west-1.rds.amazonaws.com',
    user: 'alpha',
    password: 'hemingway',
    database: 'my_db'
});

connection.connect();
router.get('/getpoem', (req, res, next) => {
   res.send({
       
   });
});
