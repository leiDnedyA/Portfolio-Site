import express from 'express';

const router = new express.Router();

router.use('/config', express.static('config-page'))

export default router;