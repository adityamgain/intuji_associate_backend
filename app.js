const http= require('http');
const sequelize = require('./db');
const url = require('url');

// models
const Location= require('./models/locations');
const Weather_realtime= require('./models/weather_realtime');
const Weather_forecast=  require('./models/weather_forecast');
const Air_quality= require('./models/air_quality');

const PORT = 1212;

const server = http.createServer((req, res) => {
    // Routing
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello, world!');
    } 
    else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Page not found');
    }
  });
  
// connection with database
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);

  });

//   starting server at port 1212 in your localhost
server.listen(PORT, ()=>{
    console.log('listening in port 1212');
})