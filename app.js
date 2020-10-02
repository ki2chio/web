const express = require("express");
const hbs = require("hbs");

let app = express();
app.set('view engine', 'hbs');

app.get('/', (req, res) =>{
    res.send("Hello, JS");
});
app.get('/weather', (req,res) => {
    const weather = {
        description: "Clear sky"
    }
    res.render('weather.hbs', {weather})
});
app.get('/weather/:city', (req,res) => {
    res.send(req.params.city);
});
app.get('/login', (req,res) => {
    res.send("login page");
});

hbs.registerPartials(__dirname + '/views/partials');

app.listen(3000, () =>{
    console.log("Example app listening onport 3000");
});