const venueRepository = require('../repositories/venue-repository');

// Find all movies
const find = async (filter) => {
    try {
        return await venueRepository.find(filter);
    } catch (err) {
        return err;
    }
};

// Find a movie
const findOne = async (filter) => {
    try {
        return await venueRepository.findOne(filter);
    } catch (err) {
        return err;
    }
};

// Create movie
const create = async (doc) => {
    try {
        return await venueRepository.create(doc);
    } catch (err) {
        return err;
    }
};

// Update movie
const update = async (filter, doc) => {
    try {
        return await venueRepository.update(filter, doc);
    } catch (err) {
        return err;
    }
};

// Patch movie
// const patch = async (filter) => {
//     try {
//         return await venueRepository.update(filter);
//     } catch (err) {
//         return err;
//     }
// };

// Remove movie
const remove = async (filter) => {
    try {
        return await venueRepository.remove(filter);
    } catch (err) {
        return err;
    }
};

module.exports = {
    find,
    findOne,
    create,
    update,
    // patch,
    remove
};