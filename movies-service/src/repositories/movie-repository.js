const db       = require('./connection');

const movieSchema    = require('../schemas/movie-schema');
const MovieModel     = db.model('Movie', movieSchema);


const find = async (filter) => {
    try {
        return await MovieModel.find(filter);
    } catch (err) {
        return err;
    }
};


const findOne = async (filter) => {
    try {
        return await MovieModel.findOne(filter);
    } catch (err) {
        return err;
    }
};

const create = async (doc) => {
    try {
        return await MovieModel.create(doc);
    } catch (err) {
        return err;
    }
};

const update = async (filter, doc) => {
    try {
        return  await MovieModel.findOneAndUpdate(filter, doc, {new: true});
    } catch (err) {
        return err;
    }
};

const remove = async (filter) => {
    try {
        return await MovieModel.remove(filter);
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