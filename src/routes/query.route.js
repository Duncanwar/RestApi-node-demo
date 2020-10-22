import express from 'express';
import queryController from '../controllers/query.controller.js';

const router = express.Router();
const {retrieveQuery, createQuery} = queryController;

router.post('/queries',createQuery);
router.get('/queries',retrieveQuery);

export default router;