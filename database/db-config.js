const mongoose = require('mongoose');

const dbConnectionMongoAtlas = async () => {
    try {
        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser:    true,
            useUnifiedTopology: true,
            useCreateIndex:     true,
            // useFindAndModify:   false
        });
        console.log('Conexión a Mongo Atlas establecida.');
    } catch (error) {
        console.log(error);
        throw new Error('Error al intentar inicializar la conexión a Mongo Atlas.');
    }
}

module.exports = {
    dbConnectionMongoAtlas
};
