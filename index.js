const express = require('express');
const config = require('./config/index.config');
require('./src/services/mongodb.service');

const app = express();

app.use(express.json());

const router = require('./src/routers/index.router');

app.use(router);

const PORT = config.configurations.PORT;


app.listen(PORT, ()=>{
    console.log(`API escuchando en http://localhost:${PORT}`);
});