const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Pet = require('../../models/Pet');
const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    POST api/pets
// @desc     Create a pet
// @access   Private
router.post(
  '/',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newPet = new Pet({
        breed: req.body.breed,
        weight: req.body.weight,
        age: req.body.age,
        serialNumber: req.body.serialNumber,
        isNeutralized: req.body.isNeutralized,
        coordinate: req.body.coordinate,
        date: req.body.date,
        user: req.user.id,
      });

      const pet = await newPet.save();

      res.json(pet);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/pets
// @desc     Get all pets
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const pets = await Pet.find().sort({ date: -1 });
    res.json(pets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/pets/:id
// @desc     Get pet by ID
// @access   Private
router.get('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const pet = await pet.findById(req.params.id);

    res.json(pet);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/pets/:id
// @desc     Delete a pet
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const pet = await pet.findById(req.params.id);

    if (!pet) {
      return res.status(404).json({ msg: 'pet not found' });
    }

    // Check user
    if (pet.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await pet.remove();

    res.json({ msg: 'pet removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

module.exports = router;
