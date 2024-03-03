const express = require('express');
const router = express.Router();
const { sessionCtrl } = require('../controllers')

router.post('/login', sessionCtrl.login);
router.post('/logout', sessionCtrl.logout);

module.exports = router;