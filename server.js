const path = require('path');
const express = require('express');
const app = express();

const compression = require('compression')

app.use(compression())



// Serve static files
app.use(express.static(__dirname + '/dist/gulnarmam'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/gulnarmam/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);





