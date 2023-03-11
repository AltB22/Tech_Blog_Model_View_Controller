const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Blog extends Model {}

Blog.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		blog_post: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
	}
);

module.exports = Blog;
