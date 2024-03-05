const express = require('express');
const router = express.Router();
const { login, logout } = require('../controllers/sessionCtrl');

router.post('/', login);
router.post('/logout', logout);

module.exports = router;