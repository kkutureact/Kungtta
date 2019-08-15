import Sequelize from 'sequelize';
import sequelize from '../index';
import BanList from '../Banlist';

class Users extends Sequelize.Model {}

Users.init({
    uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    vendor: {
        type: Sequelize.CHAR(10),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(80),
        unique: true,
        allowNull: false
    },
    nickname: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    profile: {
        type: Sequelize.STRING(150),
        allowNull: true
    },
    isMuted: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    mute_exp_date: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}, { sequelize, modelName: 'users', timestamps: false });

Users.hasOne(BanList, { foreignKey: 'uuid' });
BanList.belongsTo(Users, { foreignKey: 'uuid' });

export default Users;
