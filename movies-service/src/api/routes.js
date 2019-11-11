const express   = require('express');
const router    = express.Router();

const movieService = require('../services/movie-service');

// Get movies
router.get('/', async (req, res) => {
    try {
        const movies = await movieService.find({});
        return res.json({data: { movies}});
    } catch (err) {
        return res.status(500).json({error: err});
    }
});

// Get movie
router.get('/:id', async (req, res) => {
    try {
        const movie = await movieService.findOne({_id: req.params.id});

        if (!movie) {
            return res.status(404).json({error: {status: 404, message: 'Not found'}});
        }

        return res.json({data: { movie}});
    } catch (err) {
        return res.status(500).json({error: err});
    }
});

// Post movie
router.post('/', async (req, res) => {
    try {
        const movie = await movieService.create(req.body.movie);
        return res.status(201).json({data: { movie}});
    } catch (err) {
        return res.status(500).json({error: err});
    }
});

// Put movie
router.put('/:id', async (req, res) => {
    try {
        const movie = await movieService.update({_id: req.params.id}, req.body.movie);
        return res.status(200).json({data: { movie}});
    } catch (err) {
        res.status(500).json({error: err})
    }
});

// Delete movie
router.delete('/:id', async (req, res) => {
    try {
        const movie = await movieService.remove({_id: req.params.id});
        return res.status(200).json({data: { movie}});
    } catch (err) {
        res.status(500).json({error: err})
    }
});

module.exports = router;