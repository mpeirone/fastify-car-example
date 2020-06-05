const swaggerConfig= require('./swagger.js');
const DBConfig={
  connectionString: 'mongodb://localhost/mycargarage',
};
const JWTConfig={
  secret: 'c1aoCiaobasmeilDr4u',
};

module.exports = {DBConfig, JWTConfig, swaggerConfig};
