const express = require('express')
const app = express();
const config = require('./config');
const axios = require('axios');

axios.defaults.baseURL = config.igdbBaseUrl;
axios.defaults.headers.common['User-Key'] = config.igdbApiKey;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(config.port, () => axios.get('/games').then(res => console.log(res.data)));