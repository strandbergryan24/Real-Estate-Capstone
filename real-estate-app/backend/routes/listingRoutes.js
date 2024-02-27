const router = require('express').Router()
const listingCtrl = require('../controllers/listingCtrl.js')

router.get('/', listingCtrl.getListing)
router.post('/', listingCtrl.createListing)
router.put('/:id', listingCtrl.updateListing)
router.delete('/:id', listingCtrl.deleteListing)

module.exports = router