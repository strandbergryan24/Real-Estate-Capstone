const express = require('express');
const { sessionCtrl } = require('../controllers');
const router = express.Router();

router.post('/login', sessionCtrl.login);
router.post('/logout', sessionCtrl.logout);

module.exports = router;