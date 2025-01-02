const { DataTypes } = require('sequelize');
const sequelize = require('../db')
const Location= require('./locations');


const Air_quality = sequelize.define(' Air_quality', {
location_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Location,
        key: 'id'
    }
  },    
  aqi: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  description: {  
    type: DataTypes.CHAR,
    allowNull: true,
  }
});

module.exports = Air_quality;