import axios from "axios";
// Weather
//Function to find weather, must give zipcode as input
async function getWeather(zipcode) {
  let weather;
  try {
    const result = await axios({
      method: 'GET',
      url: 'http://api.weatherapi.com/v1/current.json',
      params: {
        key: '972ba847ab9847dfbab13948200311',
        q: zipcode
      }
    });
    weather = result.data.current.condition.code;
  } catch (error) {
    console.log('error');
  }
  
  if (weather == 1000 || weather == 1003) {
    console.log("GREAT WEATHER, EITHER SUNNY IF DAY or CLEAR IF NIGHT");
  } else if (weather == 1150 || weather == 1153 || weather == 1180 || weather == 1183) {
    console.log("NICE RAIN");
  } else if ((weather >= 1210 && weather <= 1225) || (weather == 1255 || weather == 1258 )) {
    console.log("NICE SNOW")
  } else if (weather == 1135 || weather == 1030) {
    console.log("FOG/MIST");
  } else {
    console.log("BAD WEATHER - HEAVY RAIN, STORMS, BLIZZARDS");
  }
} 
//Time
//Function to find time and if holoiday season
function getTime() {
  let date = new Date();

  if (date.getHours() < 4) {
    console.log('LATE NIGHT MOVES, MIDNIGHT - 4AM');
  } else if (date.getHours() < 8) {
    console.log('EARLY BIRD, 4AM - 8AM');
  } else if (date.getHours() < 12) {
    console.log('MORNING, 8AM - NOON');
  } else if (date.getHours() < 17) {
    console.log('AFTER NOON, NOON - 5PM');
  } else if (date.getHours() < 21) {
    console.log('EVENING, 5PM - 9PM');
  } else {
    console.log('NIGHT, 9PM - MIDNIGHT');
  }

  //CHECK FOR HOLIDAY SEASON?
  if (date.getMonth() + 1 >= 11) {
    console.log('CHRISTMAS SEASON');
  }
}

//Economy
//Function to find if market was green or red
let getEconomy = async function() {
  let market;
  try {
    const result = await axios({
      method: 'GET',
      url: 'https://api.polygon.io/v2/aggs/ticker/SPY/prev?apiKey=ch681avZepNRzClWy_mfdupppttgXtSj',

    });
    market = result.data.results[0];
  } catch (error) {
    console.log('error');
  }

  if (market.c > market.o) {
    console.log('MARKETS GREEN');
  } else {
    console.log('MARKETS RED');
  }
}
