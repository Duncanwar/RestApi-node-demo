import queryRoutes from './query.route.js'
import express from 'express';

const router = express.Router();

router.use(queryRoutes);

export default router;
