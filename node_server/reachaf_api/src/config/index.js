export default {
  port: process.env.PORT || 4000,
  ip: process.env.SERVE_IP || '127.0.0.1',
  database: {
    database: process.env.DB_NAME || 'reachaf_db',
    password: process.env.DB_PASS || '123456',
    username: process.env.DB_USER || 'postgres'
  },
  secret: process.env.JWT_SECRET || 'Tlzmflt'
};
