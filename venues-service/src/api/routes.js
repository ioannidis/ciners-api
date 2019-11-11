const express       = require('express');
const router        = express.Router();

const venueService  = require('../services/venue-service');

// Get venues
router.get('/', async (req, res) => {
    try {
        const venues = await venueService.find({});
        return res.json({data: {venues}});
    } catch (err) {
        return res.status(500).json({error: err});
    }
});

// Get venue
router.get('/:id', async (req, res) => {
    try {
        const venue = await venueService.findOne({_id: req.params.id});

        if (!venue) {
            return res.status(404).json({error: {status: 404, message: 'Not found'}});
        }

        return res.json({data: {venue}});
    } catch (err) {
        return res.status(500).json({error: err});
    }
});

// Post venue
router.post('/', async (req, res) => {
    try {
        const venue = await venueService.create(req.body.venue);
        return res.json({data: {venue}});
    } catch (err) {
        return res.status(500).json({error: err});
    }
});

// Put venue
router.put('/:id', async (req, res) => {
    try {
        const venue = await venueService.update({_id: req.params.id}, req.body.venue);
        return res.json({data: {venue}});
    } catch (err) {
        return res.status(500).json({error: err});
    }
});

// Patch venue
// router.patch('/:id', async (req, res) => {
//
// });

// Delete venue
router.delete('/:id', async (req, res) => {
    try {
        const venue = await venueService.remove({_id: req.params.id});
        return res.json({data: {venue}});
    } catch (err) {
        return res.status(500).json({error: err});
    }
});


module.exports = router;