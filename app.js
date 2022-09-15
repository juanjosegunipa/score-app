const express = require('express');
const hbs = require('hbs');
const axios = require('axios');

const app = express();

app.set('views', __dirname + '/views')
app.set('view engine', hbs);

app.get('/', (req, res, next) => {
    res.render('index.hbs')
});

const myCompetitions = axios.create({
    baseURL: 'https://api.football-data.org/v4/competitions',
    Headers: {
        "X-Auth-Token": "5813185448f84170a69c793dcc11dac0"
    }
});

app.get('/leagues', (req, res, next) => {
    const myLeagues = req.query.competitions[0]
})

app.listen(3000, () => console.log('server is running'))