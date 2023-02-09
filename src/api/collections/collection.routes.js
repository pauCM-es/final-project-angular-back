const express = require('express');
const isAuth = require('../../utils/auth/middlewares/authMiddlewares');
const controller = require('./title.controllers');
const router = express.Router();

router.get('/:date', controller.deleteCollectionByDate);
router.post('/create', controller.postCollection);
router.post('/delete/:date', controller.getCollectionByDate);

module.exports = router;


