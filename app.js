require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('build'))
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})