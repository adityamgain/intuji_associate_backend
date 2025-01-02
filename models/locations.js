const { DataTypes } = require('sequelize');
const sequelize = require('../db')

const Location = sequelize.define(' Location', {
  id: {
    type: DataTypes.CHAR,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
  latitute: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  longitute: {  
    type: DataTypes.FLOAT,
    allowNull: true,
  }
});

module.exports = Location;