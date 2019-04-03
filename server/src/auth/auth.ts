import passport from 'passport';
import authGoogle from './authGoogle';
import Users from '../database/Users/index';
import {logger} from '../index';
import uuidv4 from 'uuid/v4';

export default () => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    authGoogle();
}

export const onSuccess = (vendor: string, email: string, nickname: string, profileUrl: string, done: (error: any, user?: any) => void) => {
    Users.findOrCreate({
        where: {email: email},
        defaults: {
            uuid: uuidv4(),
            vendor: vendor,
            email: email,
            nickname: nickname,
            profile: profileUrl,
            isBanned: false,
            isMuted: false,
            isAdmin: false
        }
    }).spread((user: any, created) => {
        const uuid = user.dataValues.uuid;

        if (created) {
            logger.info(`${uuid} 사용자가 새로 가입하였습니다.`);
            done(null, user);
        } else {
            Users.findOne({where: {uuid: uuid}})
                .then((data: any) => {
                    logger.info(`${uuid} 사용자가 로그인하였습니다.`);
                    done(null, user);
                });
        }
    });
};
