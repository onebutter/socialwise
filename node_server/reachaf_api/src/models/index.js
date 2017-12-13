import path from 'path';
import Sequelize from 'sequelize';
import config from 'config';

const modelList = ['User'];
let db = {};

const { database, password, username } = config.database;
const sequelize = new Sequelize(
  `postgresql://${username}:${password}@db/${database}`
);

for (const name of modelList) {
  const model = sequelize.import(path.join(__dirname, name));
  db[model.name] = model;
}

for (const name of modelList) {
  if (db[name].associate) {
    db[name].associate(db);
  }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
