import { Router } from 'express';
const router = Router();

// routes
router.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

export default router;

function hello(req, res, next) {
    res.send('Hello World!')
}