import passport from 'passport';
import google from 'passport-google-oauth';
import config from '../config/oauth.json';
import {onSuccess} from './auth';

const Strategy = google.OAuth2Strategy;

export default () => {
    passport.use(new Strategy({
            clientID: config.google.clientId,
            clientSecret: config.google.clientSecret,
            callbackURL: '/oauth/google/callback'
        }, (accessToken, refreshToken, profile, done) => {
            const email = profile.emails![0].value;
            const nickname = profile.displayName;
            const profileUrl = profile.photos![0].value;

            onSuccess('google', email, nickname, profileUrl, done);
        }
    ));
}
