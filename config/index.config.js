const { config } = require('dotenv');

config();

const configurations = {
    PORT: process.env.PORT,
    MONGO_URI: 'mongodb+srv://estudiante:' + process.env.PASSWORD + '@estudiantes-carreras.czb0y.mongodb.net/' + process.env.MONGO_DB + '?retryWrites=true&w=majority'
}

module.exports = { configurations };