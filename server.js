const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const path = require('path');

const MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/app/views'));

console.log("hello world");


  // Retrieve



  MongoClient.connect('mongodb://localhost:27017/exampleDb', (err, client) => {
    if (err) return console.log(err + ". maybe you need to run from cmdline: sudo service mongod start");
    
    let db = client.db('star-wars-quotes'); // whatever your database name is
    app.listen(3000, () => {
      console.log('listening on 3000, mongodb connected.');
    });


    app.delete('/quotes', (req, res) => {
      console.log("deleting!!!");
      db.collection('quotes').findOneAndDelete({
          name: req.body.name
        },
        (err, result) => {
          if (err) return res.send(500, err);
          res.send({
            message: 'A darth vadar quote got deleted'
          });
        });
    });

    app.put('/quotes', (req, res) => {
      console.log("updating...");
      db.collection('quotes')
        .findOneAndUpdate({
          name: 'Yoda'
        }, {
          $set: {
            name: req.body.name,
            quote: req.body.quote
          }
        }, {
          sort: {
            _id: -1
          },
          upsert: true
        }, (err, result) => {
          if (err) return res.send(err);
          res.send(result);
        });
    });
    


    app.get('/', (req, res) => {
      db.collection('quotes').find().toArray((err, result) => {
        if (err) return console.log(err);
        // renders index.ejs
        res.render('index.ejs', {quotes: result});
        // res.sendFile(__dirname + '/public/html/index.html');
      });
    });







    app.post('/quotes', (req, res) => {
      console.log(req.body);
    
    db.collection('quotes').save(req.body, (err, result) => {
      if (err) return console.log("ERROR:" + err);
  
      console.log(result + 'saved to database');
      res.redirect('/');
    });
  });


  });
