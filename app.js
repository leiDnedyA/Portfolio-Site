import express from 'express';
import dotenv, { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();
import { placesAPIRouter } from './thrift_router/api/placesAPI.mjs';
import configRouter from './routes/config.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(placesAPIRouter);
app.use(configRouter);

app.use('/thrift-router', express.static('thrift_router/dist'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
