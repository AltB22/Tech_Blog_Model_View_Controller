const seedUsers = require('./userSeedData')
const seedBlogs = require('./seedBlogPosts')
const seedComments = require('./seedComments')

const sequelize = require("../config/connection");
// const { User, Blog, Comment } = require("../models");

// const userData = require("./userSeedData.js");
// const blogPosts = require("./seedBlogPosts.js");
// const commentData = require("./seedComments.js");

const seedDatabase = async () => {
	await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

	await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
	
	await seedBlogs();
    console.log('\n----- Blogs SEEDED -----\n');

    await seedComments();
    console.log('\n----- Comments SEEDED -----\n');

	process.exit(0);
};

seedDatabase();





// Alt Version here V.1

// const sequelize = require("../config/connection");
// // const { User, Blog, Comment } = require("../models");

// // const userData = require("./userSeedData.js");
// // const blogPosts = require("./seedBlogPosts.js");
// // const commentData = require("./seedComments.js");

// const seedDatabase = async () => {
// 	await sequelize.sync({ force: true });
//     console.log('\n----- DATABASE SYNCED -----\n');
    
// 	await User.bulkCreate(userData, {
//     console.log('\n----- USERS SEEDED -----\n');
// 		// individualHooks: true,
// 		// returning: true,
// 	});
// 	await Blog.bulkCreate(blogPosts, {
// 		// individualHooks: true,
// 		// returning: true,
// 	});
//     await Comment.bulkCreate(commentData, {
// 		// individualHooks: true,
// 		// returning: true,
// 	});

// 	process.exit(0);
// };

// seedDatabase();