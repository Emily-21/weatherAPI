const express = require('express'); //needs installing
const app = express();
const hbs = require('express-handlebars'); //needs installing
const path = require('path'); //already imported
const bodyParser = require('body-parser');
require('dotenv').config();
const weather = require('./lib/weatherapp'); //importing the function from the weatherapp.js file

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json();)
app.use(express.static(path.join(__dirname, 'public')));
//this is saying store stuff in the public folder?

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));

app.set('view engine', '.hbs');
//this is setting up a template extension

app.get('/', async(req, res) => {
    
    res.render('index');
})

app.post('/', async (req, res) => {
    let city = req.body.city;
    let response = await weather(city);
    
    res.render('index', 
    {response})
});




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

