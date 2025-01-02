const { Sequelize } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,     
   'postgres',      
   process.env.DATABASE_PW,        
  {
    host: 'localhost',  
    dialect: 'postgres', 
    port: 5432,          
  }
);

module.exports = sequelize;
