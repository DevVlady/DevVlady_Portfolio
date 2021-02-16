const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// const publicPath = path.join(__dirname, 'public');

// app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'build')));

//Root route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });

//Server active on PORT
app.listen(PORT, () => {
    console.log(`🌏 ==> API server now on PORT ${PORT}!`);
 });