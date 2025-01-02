const Location= require('../models/locations');
const Weather_forecast= require('../models/weather_forecast')
const Air_quality= require('../models/air_quality')
const Weather_realtime= require('../models/weather_realtime')

// get all locations
exports.getLocation = async function(req, res) {
    try {
        // retriving data
        const location_data = await Location.findAll( );
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(location_data));
    } catch(err){
        console.error(error);
    }
 }

//  add new location
 exports.createLocation = function(req, res) {
    try{
    req.on('end', function () {
        const { name, latitute, longitute } = req.body;
        const locationdata = await Location.create({
            name,
            latitute,
            longitute 
          });
      var response = [
        {
          "text": "Location detail added successfully"
        },
        locationdata
      ]
      res.statusCode = 201;
      res.setHeader('content-Type', 'Application/json');
      res.end(JSON.stringify(response))
    })
    }catch(err){
        console.log(err);
    }
  }

//  get all weather forecast from last 3 days
 exports.getforecast = async function(req, res) {
    try {
        // retriving data
        const forecast_data = await Weather_forecast.findAll({
            where: {
                createdAt: {
                  [Op.gte]: Sequelize.literal(`NOW() - INTERVAL '3d'`),
                }
              }
        });
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(forecast_data));
    } catch(err){
        console.error(error);
    }
 }

//  add new forecast
 exports.createforecast = function(req, res) {
     try{
    req.on('end', function () {
        const { min_temp, max_temp, condition } = req.body;
        const forecastdata = await Weather_forecast.create({
            min_temp,
            max_temp,
            condition
          });
      var response = [
        {
          "text": "Weather forecast added successfully"
        },
        forecastdata
      ]
      
      res.statusCode = 201;
      res.setHeader('content-Type', 'Application/json');
      res.end(JSON.stringify(response))
    })
    }catch(err){
        console.log(error);
    }
  }

//   get realtime weather info for perticular location
 exports.getrealtime = async function(req, res) {
    try {
        // retriving data
        const { search_for } = req.body;
        const location_data = await Location.findAll({
            where: {
                location: search_for,
              },
        });
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(location_data));
    } catch(err){
        console.error(error);
    }
 }

//  add new realtime weather
 exports.createrealtime = function(req, res) {
    try{
    req.on('end', function () {
        const { location_id, temperature, condition,humidity,wind_speed } = req.body;
        const realtimedata = await Weather_forecast.create({
            location_id,
            temperature,
            condition,
            humidity,
            wind_speed
          });
      var response = [
        {
          "text": "realtime weather data added successfully"
        },
        realtimedata
      ]
      
      res.statusCode = 201;
      res.setHeader('content-Type', 'Application/json');
      res.end(JSON.stringify(response))
    })
    }catch(err){
        console.error(error);
    }
  }

//   get air quality info for perticular location
 exports.getairquality = async function(req, res) {
    try {
        const { search_for } = req.body;
        const airquality_data = await Location.findAll({
            where: {
                location_id: search_for,
              },
        });
        // retriving data
        const airquality_data = await Air_quality.findAll( );
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(airquality_data));
    } catch(err){
        console.error(error);
    }
 }

//  add new air quality info
 exports.createairquality = function(req, res) {
    try{
    req.on('end', function () {
        const { location_id, aqi, description } = req.body;
        const airquality_data = await Weather_forecast.create({
            location_id,
            aqi,
            description
          });
      var response = [
        {
          "text": "realtime weather data added successfully"
        },
        airquality_data
      ]
      
      res.statusCode = 201;
      res.setHeader('content-Type', 'Application/json');
      res.end(JSON.stringify(response))
    })
    }catch(err){
        console.log(error);
    }
  }