const db            = require('./connection');

const userSchema    = require('../schemas/user-schema');
const UserModel     = db.model('User', userSchema);

const find = async (filter) => {
    try {
        return await UserModel.find(filter);
    } catch (err) {
        return err;
    }
};

const findOne = async (filter) => {
    try {
        return await UserModel.findOne(filter);
    } catch (err) {
        return err;
    }
};

const create = async (doc) => {
    try {
        return await UserModel.create(doc);
    } catch (err) {
        return err;
    }
};

const update = async (filter, doc) => {
    try {
        return  await UserModel.findOneAndUpdate(filter, doc, {new: true});
    } catch (err) {
        return err;
    }
};

// const patch = async (filter, doc) => {
//     try {
//         return  await UserModel.findOneAndUpdate(filter, doc, {new: true});
//     } catch (err) {
//         return err;
//     }
// };

const remove = async (filter) => {
    try {
        return await UserModel.remove(filter);
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