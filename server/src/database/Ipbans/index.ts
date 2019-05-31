import Sequelize from 'sequelize';
import sequelize from '../index';

class Ipbans extends Sequelize.Model {}

Ipbans.init({
    ip: {
        type: Sequelize.CHAR(45),
        primaryKey: true,
        unique: true,
        allowNull: false
    }
}, { sequelize, modelName: 'ipbans', timestamps: false });

export default Ipbans;