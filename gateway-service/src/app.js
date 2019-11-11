const express       = require('express');
const app           = express();

const cors          = require('cors');
const helmet        = require('helmet');
const passport      = require('passport');
const passportJwt   = require('passport-jwt');
const proxy         = require('http-proxy-middleware');

const router        = require('./api/routes');

require('./auth');


// Use cors
app.use(cors());

// Use helmet
app.use(helmet());


// Users proxy
const usersOptions = {
    target: 'http://localhost:1010',
    changeOrigin: true
};
app.use('/users', passport.authenticate('jwt', {session: false}), proxy(usersOptions));

// Movies proxy
const moviesOptions = {
    target: 'http://localhost:1020',
    changeOrigin: true
};
app.use('/movies', passport.authenticate('jwt', {session: false}), proxy(moviesOptions));

// Users proxy
const venuesOptions = {
    target: 'http://localhost:1030',
    changeOrigin: true
};
app.use('/venues', passport.authenticate('jwt', {session: false}), proxy(venuesOptions));


app.post('/hi', passport.authenticate('jwt', {session: false}), (req, res) => {
    console.log('hi!');
    res.send(200);
});


// Parse request body
app.use(express.json());

// Gateway routes
app.use('', router);


const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);
    console.log('Press Ctrl+C to quit.');
});