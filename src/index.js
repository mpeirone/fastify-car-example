// import configs
const {DBConfig, JWTConfig, swaggerConfig} = require('./configs/config.js');

// import and istance fastify
const fastify = require('fastify')({
  logger: {
    prettyPrint: true,
  },
});

// importa fastify-boom
fastify.register(require('fastify-boom'));

// importa e inizializza fastify-jwt
fastify.register(require('fastify-jwt'), {
  secret: JWTConfig.secret,
});

// import mongoose
const mongoose = require('mongoose');

// importa e istanzia swagger
fastify.register(require('fastify-swagger'), swaggerConfig.options);

// import routes

//


fastify.get('/', async (request, reply) => {
  return {
    hello: 'world',
  };
});

// Run the server!
const start = async () => {
  try {
    // Connect to DB
    mongoose.connect(DBConfig.connectionString)
        .then(() => console.log('MongoDB connected...'))
        .catch((err) => console.log(err));


    await fastify.listen(3000, '0.0.0.0');
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();

module.exports = fastify;
