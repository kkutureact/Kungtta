import passport from 'passport';
import authGoogle from './authGoogle';
import User from '../database/Users/index';
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
    User.findOrCreate({
        where: { email: email },
        defaults: {
            uuid: uuidv4(),
            vendor: vendor,
            email: email,
            nickname: nickname,
            profile: profileUrl,
            isBanned: false,
            isMuted: false
        }
    }).spread((user, created) => {
        if (created) {
            logger.info('새로운 유저 가입');
            done(null, user);
        } else {
            logger.info('기존 유저 로그인');
            done(null, user);
        }
    });
};
