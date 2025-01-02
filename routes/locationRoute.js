const http = require('http');
const url = require('url');

// get request for location data
module.exports = http.createServer((req, res) => {
    var locationController = require('../Controllers/locationController');
    const reqUrl =  url.parse(req.url, true);

  if(reqUrl.pathname == '/weather/locations' && req.method === 'GET') {
        locationController.getLocation(req, res);
   }else if(reqUrl.pathname == '/weather/locations' && req.method === 'POST') {
    locationController.getLocation(req, res);
}
 }
);

// get request for weather forecast
module.exports = http.createServer((req, res) => {
    var locationController = require('../Controllers/locationController');
    const reqUrl =  url.parse(req.url, true);

  if(reqUrl.pathname == '/weather/forecast' && req.method === 'GET') {
        locationController.getforecast(req, res);
   }else if(reqUrl.pathname == '/weather/forecast' && req.method === 'POST') {
        locationController.createforecast(req, res);
 }
 }
);

// get request for weather realtime
module.exports = http.createServer((req, res) => {
    var locationController = require('../Controllers/locationController');
    const reqUrl =  url.parse(req.url, true);

  if(reqUrl.pathname == '/weather/realtime' && req.method === 'GET') {
        locationController.getrealtime(req, res);
   }else if(reqUrl.pathname == '/weather/realtime' && req.method === 'POST') {
    locationController.createrealtime(req, res);
}
 }
);

// get request to retrive air quality
module.exports = http.createServer((req, res) => {
    var locationController = require('../Controllers/locationController');
    const reqUrl =  url.parse(req.url, true);

  if(reqUrl.pathname == '/weather/airquality' && req.method === 'GET') {
        locationController.getairquality(req, res);
   }else if(reqUrl.pathname == '/weather/airquality' && req.method === 'POST') {
    locationController.createairquality(req, res);
}
 }
);

