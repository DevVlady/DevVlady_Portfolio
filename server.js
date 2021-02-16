const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, './public/index.html');

app.use(express.static(publicPath));