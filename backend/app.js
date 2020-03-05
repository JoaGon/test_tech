// Load express module
const express = require('express');
const bodyParser = require('body-parser');
// Initialize app
const app = express();
// Initialize port
const port = 3000;
// Initialize paths
const path = require('path');

// Initialize public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route for home
app.post('/', function(req, res){
    res.send('Hello from Server');
})

// Start server with port 3000
app.listen(port, function(){
    console.log('Server is starting at ' + port);
})