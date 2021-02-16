const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, './public/index.html');

app.use(express.static(publicPath));

//Root route
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

//Server active on PORT
app.listen(PORT, () => {
    console.log(`Server 🌏 is up on PORT ${PORT}!`);
 });