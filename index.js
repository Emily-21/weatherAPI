const express = require('express'); //needs installing
const app = express();
const hbs = require('express-handlebars'); //needs installing
const path = require('path'); //already imported
require('dotenv').config();
const weather = require('./lib/weatherapp'); //importing the function from the weatherapp.js file


app.use(express.static(path.join(__dirname, 'public')));
//this is saying store stuff in the public folder?

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));

app.set('view engine', '.hbs');
//this is setting up a template extension

app.get('/', async(req, res) => {
    let data = await weather();
    console.log(data);
    let temp = data.main.temp;
    let desc = data.weather[0].description;
    let humidity = data.main.humidity;
    let sunset = data.sys.sunset;
    let name = data.name;
    res.render('index', {name, temp, desc, humidity, sunset});
})


app.listen(8080, () => {
console.log('listening on port 8080')

});
 
/*common port numbers are 3000,
8000
8080
5000
6000
cant use 22, 43,
*/

