const weather = require('./weather');
weather.queryWeather('101020100',(data)=>{
    console.log(data);
});