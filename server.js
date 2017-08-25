var express = require('express');
var app = express();
var path = require('path');

// STATIC FILES
app.use(express.static('public'));

// ENTRY POINT
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(3000, () => {
  console.log('App web-server listening on port 3000');
});
