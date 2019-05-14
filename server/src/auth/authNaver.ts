import passport from 'passport';
import naver from 'passport-naver';
import config from '../config/oauth.json';
import {onSuccess} from './auth';
import {logger} from '../index';

const NaverStrategy = naver.Strategy;

export default () => {
    passport.use(new NaverStrategy({
            clientID: config.naver.clientId,
            clientSecret: config.naver.clientSecret,
            callbackURL: '/auth/naver/callback'
        }, (accessToken, refreshToken, profile, done) => {
            const email = profile.emails![0].value;
            const nickname = profile.displayName;
            const profileUrl = profile._json.profile_image;

            onSuccess('naver', email, nickname, profileUrl, done);
        }
    ));
}
