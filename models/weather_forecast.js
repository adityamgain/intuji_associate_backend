const { DataTypes } = require('sequelize');
const sequelize = require('../db')

const Weather_forecast = sequelize.define(' Weather_forecast', {
  date: {  
    type: DataTypes.DATE,
    allowNull: false,
  },
  min_temp: {  
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  max_temp: {  
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  condition: {  
    type: DataTypes.CHAR,
    allowNull: false,
  }
}, { timestamps: true });

module.exports = Weather_forecast;