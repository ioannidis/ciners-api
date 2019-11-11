const express   = require('express');
const app       = express();

const cors      = require('cors');
const helmet    = require('helmet');

const routes    = require('./api/routes');

// Parse request body
app.use(express.json());

// User cors
app.use(cors());

// User helmet
app.use(helmet());

// User routes
app.use('/venues', routes);


const PORT = process.env.PORT || 1030;
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);
    console.log('Press Ctrl+C to quit.');
});