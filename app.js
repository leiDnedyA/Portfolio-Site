require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})