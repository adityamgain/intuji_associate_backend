const { DataTypes } = require('sequelize');
const sequelize = require('../db')
const Location= require('./locations');


const Weather_realtime = sequelize.define(' Weather_realtime', {
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Location,
        key: 'id'
    }
  },
  temperature: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  condition: {  
    type: DataTypes.CHAR,
    allowNull: false,
  },
  humidity: {  
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  wind_speed: {  
    type: DataTypes.FLOAT,
    allowNull: false,
  }
}, { timestamps: true });

module.exports = Weather_realtime;