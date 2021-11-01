//* import sequelize and env secrets
const Sequelize = require('sequelize');
require('dotenv').config();

//* if there is a connection to heroku, get the sequelize object to link to the heroku mysql setup
let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  //* otherwise connect to local mysql database
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

//* export the config connection
module.exports = sequelize;
