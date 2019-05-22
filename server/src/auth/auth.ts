import passport from 'passport';
import Users from '../database/Users/index';
import {logger} from '../index';
import uuidv4 from 'uuid/v4';
import authGoogle from './authGoogle';
import authNaver from './authNaver';
import authDiscord from './authDiscord';
import authGitHub from './authGitHub';

export default () => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    authGoogle();
    authNaver();
    authDiscord();
    authGitHub();
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
    }).then(([user, created]) => {
        const uuid = user.get('uuid') as string;

        if (created) {
            logger.info(`${vendor} 소셜서비스를 통해 ${uuid} 사용자가 새로 가입하였습니다.`);
            done(null, user);
        } else {
            Users.findOne({where: {uuid: uuid}})
                .then(() => {
                    logger.info(`${vendor} 소셜서비스를 통해 ${uuid} 사용자가 로그인하였습니다.`);
                    done(null, user);
                });
        }
    });
};
