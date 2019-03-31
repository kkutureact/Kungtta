import Sequelize from 'sequelize';
import db from '../index';

const User = {
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
    isBanned: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    isMuted: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
};

export default db.define('User', User, {timestamps: false});