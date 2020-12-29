import asyncHandler from 'express-async-handler';
import Pet from '../models/petModel.js';
import pets from '../data/pets.js';

// @desc    Return pets
// @route   GET /api/pets
// @access  Public
const getPets = asyncHandler(async (req, res) => {

    res.json(pets);
});

export {
    getPets
};