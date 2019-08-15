import Sequelize from 'sequelize';
import sequelize from '../index';

class Ipbans extends Sequelize.Model {}

Ipbans.init({
    ip: {
        type: Sequelize.CHAR(45),
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    reason: {
        type: Sequelize.STRING,
        allowNull: true
    },
    exp_date: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { sequelize, modelName: 'ipbans', timestamps: false });

export default Ipbans;
