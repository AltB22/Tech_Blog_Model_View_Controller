require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, 
    {
      host: 'localhost',
      dialect: 'mysql',
      //Do we need to include DB location here?  or PORT number at least?
      // port: 3306,
      password: "PASSWORD",
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
