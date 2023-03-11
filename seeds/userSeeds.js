const { User } = require('../models')

const userData = [
    {
      user_name: 'Billy',
      password: 12345
    },
    {
      user_name: 'Jimmy',
      password: 678910
    },
  ];

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;