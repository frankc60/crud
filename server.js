const express = require('express');
const bodyParser= require('body-parser')
const app = express();

const MongoClient = require('mongodb').MongoClient;


app.use(bodyParser.urlencoded({extended: true}))


console.log("hello world");





 

  // Retrieve



  MongoClient.connect('mongodb://localhost:27017/exampleDb', (err, client) => {
    if (err) return console.log(err)
    let db;
    db = client.db('star-wars-quotes') // whatever your database name is
    app.listen(3000, () => {
      console.log('listening on 3000, mongodb connected.')
    })

    app.get('/', (req, res) => {
      //res.send('Hello World')
      db.collection('quotes').find().toArray(function(err, results) {
        console.log(results)
        // send HTML file populated with quotes here
      })
      res.sendFile(__dirname + '/public/html/index.html');
    });

    app.post('/quotes', (req, res) => {
      console.log(req.body);
    
    db.collection('quotes').save(req.body, (err, result) => {
      if (err) return console.log(err)
  
      console.log('saved to database')
      res.redirect('/')
    })
  });


  })
