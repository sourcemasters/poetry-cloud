
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'verse.cqbf6drqxf3o.us-west-1.rds.amazonaws.com',
    user: 'alpha',
    password: 'hemingway',
    database: 'verse'
});

router.get('/insertpoem', (req, res, next) => {
   res.send("API works");
   connection.connect(function(err) {
      if (err) res.send("Error");
      res.send("Connected to Database!");
   });
   const title = req.query.title;
   const author = req.query.author;
   const poem_text = req.query.poem_text;
   const genre = req.query.genre;
   const language = req.query.language;
   let author_id = 0;
   let genre_id = 0;
   let language_id = 0;
	
   // connection.query(`INSERT IGNORE INTO Author (name) VALUES (${author})`, (err, rows, fields) => {
   //    if (err) throw err;
   //    connection.query(`SELECT (id) FROM Author WHERE name=${author}`, (err, rows, fields) => {
   //       author_id = rows[0].solution;
   //    });
	   
   // });
   // connection.query(`INSERT IGNORE INTO Genre (name) VALUES (${genre})`);
   // connection.query(`INSERT IGNORE INTO Language (NAME) VALUES (${language})`);
   // connection.query(``)
   // res.send({
       
   // });
});

module.exports = router;
