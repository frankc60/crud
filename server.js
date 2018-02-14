const express = require('express');
const app = express();

console.log("hello world");

app.listen(3000, function() {
    console.log('listening on 3000');
  });

  app.get('/', (req, res) => {
    //res.send('Hello World')
    res.sendFile(__dirname + '/public/html/index.html')
  })