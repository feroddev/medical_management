const config = {
  username: process.env.MYSQL_USER || 'user',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'medical_management_db',
  host: process.env.MYSQL_DATABASE || 'medical_management_db',
  dialect: 'mysql',
  port: Number(process.env.DB_PORT) || 3306,
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: config,
  test: config,
  production: config,
};