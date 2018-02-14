const express = require('express');
const bodyParser= require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}))


console.log("hello world");




app.listen(3000, function() {
    console.log('listening on 3000');
  });

  app.get('/', (req, res) => {
    //res.send('Hello World')
    res.sendFile(__dirname + '/public/html/index.html')
  })

  app.post('/quotes', (req, res) => {
    console.log(req.body)
  })

