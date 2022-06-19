import { Sequelize } from 'sequelize';
require('dotenv').config({ path: 'src/config/.env' });
const MYSQL_DATABASE_NAME = process.env.MYSQL_DATABASE_NAME;
const MYSQL_DATABASE_USERNAME = process.env.MYSQL_DATABASE_USERNAME;
const MYSQL_DATABASE_PASSWORD = process.env.MYSQL_DATABASE_PASSWORD;
const MYSQL_DATABASE_HOST = process.env.MYSQL_DATABASE_HOST;
const MYSQL_DATABASE_DIALECT = process.env.MYSQL_DATABASE_DIALECT;
const db = [];
const sequelize = new Sequelize(MYSQL_DATABASE_NAME, MYSQL_DATABASE_USERNAME, MYSQL_DATABASE_PASSWORD, {
  host: MYSQL_DATABASE_HOST,
  dialect: MYSQL_DATABASE_DIALECT,
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
export default db;