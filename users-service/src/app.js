const express   = require('express');
const app       = express();
const router    = require('./api/routes');

const cors      = require('cors');
const helmet    = require('helmet');

// Parse request body
app.use(express.json());

// Use helmet
app.use(helmet());

// Use cors
app.use(cors());

// Use router
app.use('/users', router);


const PORT = process.env.PORT || 1010;
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);
    console.log('Press Ctrl+C to quit.');
});
