const express = require("express");
const router = express.Router();
const createUser = require('../controllers/userCtrl.js');

router.post('/', createUser)

module.exports = router