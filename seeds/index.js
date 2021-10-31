const sequelize = require('../config/connection');
const seedComments = require('./comments');
const seedThreads = require('./threads');
const seedUsers = require('./users');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedThreads();

  await seedComments();

  process.exit(0);
};

seedAll();
