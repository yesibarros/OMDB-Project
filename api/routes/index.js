const router = require("express").Router();

const userRouter = require('./user')
const favoritesRouter = require('./favorites')


router.use("/users", userRouter )
router.use("/favorites", favoritesRouter )



module.exports = router;
 