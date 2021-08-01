import { Router } from 'express';
const router = Router();

//Start server
const indexFile = process.env.NODE_ENV === 'production' ? '/public/index.html' : '/public_sample/index.html';

// routes
router.get('*', (req, res) => {
    res.sendFile(__dirname + indexFile);
});

export default router;