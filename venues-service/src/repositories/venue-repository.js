const db       = require('./connection');

const venueSchema    = require('../schemas/venue-schema');
const VenueModel     = db.model('Venue', venueSchema);


const find = async (filter) => {
    try {
        return await VenueModel.find(filter);
    } catch (err) {
        return err;
    }
};


const findOne = async (filter) => {
    try {
        return await VenueModel.findOne(filter);
    } catch (err) {
        return err;
    }
};

const create = async (doc) => {
    try {
        return await VenueModel.create(doc);
    } catch (err) {
        return err;
    }
};

const update = async (filter, doc) => {
    try {
        return  await VenueModel.findOneAndUpdate(filter, doc, {new: true});
    } catch (err) {
        return err;
    }
};

// const patch = async (filter, doc) => {
//     try {
//         return  await VenueModel.findOneAndUpdate(filter, doc, {new: true});
//     } catch (err) {
//         return err;
//     }
// };

const remove = async (filter) => {
    try {
        return await VenueModel.remove(filter);
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