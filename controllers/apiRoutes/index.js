const router = require("express").Router();
const postRoutes = require("./postRoutes");
const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoutes");

//below prefixed with /api/post etc...
router.use("/post", postRoutes);
router.use("/user", userRoutes);
router.use("/comment", commentRoutes);


module.exports = router;