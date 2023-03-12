const sequelize = require("../config/connection");
const { User, Blog, Comment } = require("../models");

const userData = require("./userSeedData.js");
const blogPosts = require("./seedBlogPosts.js");
const commentData = require("./seedComments.js");

const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	await User.bulkCreate(userData, {
		individualHooks: true,
		returning: true,
	});
	await Blog.bulkCreate(blogPosts, {
		individualHooks: true,
		returning: true,
	});
    await Comment.bulkCreate(commentData, {
		individualHooks: true,
		returning: true,
	});

	process.exit(0);
};

seedDatabase();