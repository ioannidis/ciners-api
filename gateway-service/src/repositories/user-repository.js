const mongoose      = require('./connection');

const userSchema    = require('../schemas/user-schema');
const User          = mongoose.model('User', userSchema);


const findOne = async (filter) => {
    try {
        const user = await User.findOne(filter)
            .exec();
        return {data: {user}};
    } catch (err) {
        return err;
    }

};

module.exports = {
    findOne
};