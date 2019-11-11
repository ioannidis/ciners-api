const userRepository = require('../repositories/user-repository');

// Find all movies
const find = async (filter) => {
    try {
        return await userRepository.find(filter);
    } catch (err) {
        return err;
    }
};

// Find a movie
const findOne = async (filter) => {
    try {
        return await userRepository.findOne(filter);
    } catch (err) {
        return err;
    }
};

// Create movie
const create = async (doc) => {
    try {
        return await userRepository.create(doc);
    } catch (err) {
        return err;
    }
};

// Update movie
const update = async (filter, doc) => {
    try {
        return await userRepository.update(filter, doc);
    } catch (err) {
        return err;
    }
};

// Patch movie
// const patch = async (filter, doc) => {
//     try {
//         return await userRepository.update(filter, doc);
//     } catch (err) {
//         return err;
//     }
// };

// Remove movie
const remove = async (filter) => {
    try {
        return await userRepository.remove(filter);
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