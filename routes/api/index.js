const router = require("express").Router()
const petRoutes = require("./pets")

// Pet Routes 
router.use("/pets", petRoutes)

module.exports = router