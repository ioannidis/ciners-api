const userRepository = require('../repositories/user-repository');

const findOne = (async (filter) => {
    try {
        return await userRepository.findOne(filter);
    } catch (err) {
        return err;
    }
});

module.exports = {
    findOne
};
