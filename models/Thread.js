const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Thread extends Model {}

Thread.init(
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
    text_body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time_created: {
      //! LOOKUP HOW TIME FORMAT WORKS IN SEQUELIZE
      type: DataTypes.TIME,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'thread',
  }
);

module.exports = Thread;
