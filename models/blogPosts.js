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
		// post_date: {//I don't think this is needed with timestamps: true
		// 	type: DataTypes.TEXT,
		// 	allowNull: true,
		// },
	},
	{
		sequelize,
		timestamps: true,
		freezeTableName: true,
		underscored: true,
		modelName: "blog",//Discss where this is read with Tutor
	}
);

module.exports = Blog;
