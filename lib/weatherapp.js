
const fetch = require('node-fetch');
const fs = require('fs');

const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${process.env.APPID}`;


//the api keys never have http:// so you need to write it in

const getWeather = async() => {
let data = await fetch(url);
//a catch statement is used when the await fails? takes a function as a parameter ?? dunno what that means.
let JSONdata =  await data.json();

// fs.writeFileSync('./data.json', JSON.stringify(JSONdata));

// so file system is writing a new file with the path of data.json, with the content of json data, the json stringify is a formatting thing saying hey style me like json (with quotation marks around the keys)
console.log(JSONdata)
 return JSONdata;

// we use async and await because...
}
//getWeather();
 module.exports = getWeather;