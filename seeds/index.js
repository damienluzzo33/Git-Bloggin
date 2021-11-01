//* Import sequelize and the seeds
const sequelize = require('../config/connection');
const seedComments = require('./comments');
const seedThreads = require('./threads');
const seedUsers = require('./users');

//* create a seedAll function
const seedAll = async () => {
  //* initialize sequelize sync
  await sequelize.sync({ force: true });
  //* seed the users
  await seedUsers();
  //* seed the threads
  await seedThreads();
  //* seed the comments
  await seedComments();
  //* exit the process
  process.exit(0);
};

//* call the seedAll function
seedAll();
