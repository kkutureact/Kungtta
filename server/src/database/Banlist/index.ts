import Sequelize from 'sequelize';
import sequelize from '../index';

class BanList extends Sequelize.Model {}

BanList.init({
    uuid: {
        type: Sequelize.UUID,
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
}, { sequelize, modelName: 'banlist', timestamps: false });

export default BanList;
