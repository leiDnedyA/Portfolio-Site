import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { placesAPIRouter } from './thrift_router/api/placesAPI';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

app.use(placesAPIRouter);