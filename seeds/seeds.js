const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = require("./userData.js");
// const surfSpots = require("./locationData.js");

const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	await User.bulkCreate(userData, {
		individualHooks: true,
		returning: true,
	});
	// await Locations.bulkCreate(surfSpots, {
	// 	individualHooks: true,
	// 	returning: true,
	// });

	process.exit(0);
};

seedDatabase();