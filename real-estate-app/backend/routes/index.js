const router = require('express').Router()
const listingRoutes = require('/listingRoutes.js')
const userRoutes = require('./userRoutes.js')
const sessionRoutes = require('./sessionRoutes.js')

router.use('/listings', listingRoutes)
router.use('/newuser', userRoutes)
router.use('/session', sessionRoutes)

module.exports = router 