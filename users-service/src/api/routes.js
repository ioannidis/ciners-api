const express   = require('express');
const router    = express.Router();

const userService = require('../services/user-service');

// Get users
router.get('/', async (req, res) => {
    try {
        const users = await userService.find({});
        return res.json({data: { users}});
    } catch (err) {
        return res.status(500).json({error: err});
    }
});

// Get user
router.get('/:id', async (req, res) => {
   try {
       const user = await userService.findOne({_id: req.params.id});

       if (!user) {
           return res.status(404).json({error: {status: 404, message: 'Not found'}});
       }

       return res.json({data: user});
   } catch (err) {
       return res.status(500).json({error: err});
   }
});

// Post user
router.post('/', async (req, res) => {
    try {
        const user = await userService.create(req.body.user);
        return res.status(201).json({data: {user}});
    } catch (err) {
        return res.status(500).json({error: err});
    }
});

// Put user
router.put('/:id', async (req, res) => {
    try {
        const user = await userService.update({_id: req.params.id}, req.body.user);
        return res.json({data: {user}});
    } catch (err) {
        return res.status(500).json({error: err})
    }
});

//Patch user
// router.patch('/:id', (req, res) => {
//     try {
//
//     } catch (err) {
//         return res.status(500).json({error: err})
//     }
// });

// Delete user
router.delete('/:id', async (req, res) => {
    try {
        const user = await userService.remove({_id: req.params.id});
        return res.json({data: {user}});
    } catch (err) {
        return res.status(500).json({error: err})
    }
});

module.exports = router;