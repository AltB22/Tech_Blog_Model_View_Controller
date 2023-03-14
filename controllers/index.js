const router = require("express").Router();

const apiRoutes = require("./apiRoutes");
const htmlRoutes = require("./homeRoutes");
const homeRoutes = require("./homeRoutes");
const dashboardRoutes = require("./dashboard-routes");

router.use("/api", apiRoutes);
// router.use("/", htmlRoutes);
router.use("/home", homeRoutes);
router.use("/dash", dashboardRoutes);


module.exports = router
