const movieRepository = require('../repositories/movie-repository');

// Find all movies
const find = async (filter) => {
    try {
        return await movieRepository.find(filter);
    } catch (err) {
        return err;
    }
};

// Find a movie
const findOne = async (filter) => {
    try {
        return await movieRepository.findOne(filter);
    } catch (err) {
        return err;
    }
};

// Create movie
const create = async (doc) => {
    try {
        return await movieRepository.create(doc);
    } catch (err) {
        return err;
    }
};

// Update movie
const update = async (filter, doc) => {
    try {
        return await movieRepository.update(filter, doc);
    } catch (err) {
        return err;
    }
};

// Remove movie
const remove = async (filter) => {
    try {
        return await movieRepository.remove(filter);
    } catch (err) {
        return err;
    }
};

module.exports = {
    find,
    findOne,
    create,
    update,
    remove
};