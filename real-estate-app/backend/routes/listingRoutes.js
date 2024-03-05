const express = require('express');
const router = express.Router();
const { createListing, getListings, editListing, deleteListing, } = require('../controllers/listingCtrl.js');

router.get('/', getListings);
router.post('/', createListing);
router.put('/:id', editListing);
router.delete('/:id', deleteListing);

module.exports = router;
