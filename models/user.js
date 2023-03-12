const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {
	checkPassword(loginPw) {
		return bcrypt.compareSync(loginPw, this.password);
	}
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		user_name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [8],//not less than number specified.  Will need to check password length and maybe use prompt on user end.
			},
		},
	},
	{
		hooks: {//customized functions ie beforeCreate is a custom method.  Hooks more specific to sequelize
			beforeCreate: async (newUserData) => {
				newUserData.password = await bcrypt.hash(newUserData.password, 10);//10 represents the number of times to hash the password (scramble / encrypt) only bcrypt (which is a package) can interpret it.
				return newUserData;
			},
			beforeUpdate: async (updatedUserData) => {
				updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
				return updatedUserData;
			  },
		},
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: 'user',
		
	}
);

module.exports = User;
