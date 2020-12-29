import express from 'express';
import { getPets } from '../controllers/petControllers.js';

const router = express.Router();

router.route('/').get(getPets);

export default router;