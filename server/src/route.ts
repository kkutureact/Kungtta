import express from 'express';
import UserManager from './game/UserManager';

const router = express.Router();

router.get('/onlines', (req, res) => {
    res.json(UserManager.size());
});

export default router;
