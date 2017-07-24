var express = require('express');

//Create our app

var app = express();

app.use(express.static('build'));

// takes the port and a function as the parameters
app.listen(3000, function() {
  console.log('Express server is up on port 3000')
});
