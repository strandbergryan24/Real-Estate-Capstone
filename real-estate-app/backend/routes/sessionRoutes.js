const express = require('express');
const router = express.Router();
const {sessionCtrl} = require('../controllers')

router.post('/', sessionCtrl.session)
router.post('/logout', sessionCtrl.deleteSession)

module.exports = router