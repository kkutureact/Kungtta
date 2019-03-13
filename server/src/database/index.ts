import Sequelize from 'sequelize';
import config from '../config/main.json';

const db = new Sequelize(
    config.database.database,
    config.database.username,
    config.database.password,
    {
        host: config.database.host,
        port: config.database.port,
        dialect: 'mysql'
    }
);

db.sync();

export default db;