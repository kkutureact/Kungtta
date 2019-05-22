import passport from 'passport';
import github from 'passport-github2';
import config from '../config/oauth.json';
import {onSuccess} from './auth';

const Strategy = github.Strategy;

export default () => {
    passport.use(new Strategy({
            clientID: config.github.clientId,
            clientSecret: config.github.clientSecret,
            callbackURL: '/oauth/github/callback'
        }, (accessToken: string, refreshToken: any, profile: any, done: any) => {
            const email = profile.emails[0].value;
            const nickname = profile.username;
            const profileUrl = profile.avatar;

            onSuccess('github', email, nickname, profileUrl, done);
        }
    ));
}