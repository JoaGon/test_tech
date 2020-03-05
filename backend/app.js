// Load express module
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
// Initialize app
const app = express();
// Initialize port
const port = 3000;
// Initialize paths
const path = require('path');
// Initialize route
const apiRoute = require('./route/api');

// Initialize public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MIDDLEWARES
app.use(cors({ credentials: true, origin: '*' }))

app.use('/api/utc', apiRoute);

// NO ROUTES FOUND
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// ALL GENERAL ERRORS INCLUDING ABOVE ERROR
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


// Start server with port 3000
app.listen(port, function () {
    console.log('Server is starting at ' + port);
})