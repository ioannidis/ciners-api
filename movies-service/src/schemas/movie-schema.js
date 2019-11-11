const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    details: {
        director: {
            type: String,
            required: true
        },
        scriptwriter: {
            type: String,
            required: true
        },
        actors: {
            type: String,
            required: true
        },
        studio: {
          type: String,
          required: true
        },
        runtime: {
            type: Number,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        rating: {
            type: String,
            required: true
        }
    },
    media: {
        trailers: [String],
        posters: [String],
        photos: [String]
    }
});

module.exports = movieSchema;