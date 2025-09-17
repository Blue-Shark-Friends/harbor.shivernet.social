var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

// use res.render to load up an ejs view file

let branding_data = require('./views/data/_branding.json')

// index page
let index_data = require('./views/data/index.json')
app.get('/', function(req, res) {
  res.render('pages/index', {index_data: index_data, branding_data: branding_data});
});

// hosted sites

//var [sitename]_site = require('[sitepath]/server.js');

//app.use('/[sitename]/', [sitename]_site);

// end of pages

app.listen(9000);
console.log('Server is listening on port 9000');